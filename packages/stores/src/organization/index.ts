import {
  RegistryStore,
  OrganizationStatus,
  Errors,
} from "@public-badges/types";
import AWS from "aws-sdk";

const ddb = new AWS.DynamoDB.DocumentClient();
const s3 = new AWS.S3();

const getOrganization = async (objectKey: string) => {
  const Bucket = process.env.REGISTRY_BUCKET;
  if (!Bucket) {
    throw new Error(Errors.MISSING_BUCKET_NAME);
  }
  const {Body} = await s3.getObject({Bucket, Key: objectKey}).promise();
  const json = Body ? Body.toString("utf-8") : "{}";
  const organization = JSON.parse(json);
  return organization;
};

const listOrganizations = async () => {
  const Bucket = process.env.REGISTRY_BUCKET;
  if (!Bucket) {
    throw new Error(Errors.MISSING_BUCKET_NAME);
  }
  const {NextContinuationToken, CommonPrefixes} = await s3
    .listObjectsV2({Bucket, MaxKeys: 10, Delimiter: "/"})
    .promise();
  const keys: string[] = CommonPrefixes
    ? CommonPrefixes.map(({Prefix}) => {
      return `${Prefix!}meta.json`;
    })
    : [];
  return {
    keys,
    continuationToken: NextContinuationToken,
  };
};

const getOrganizationId = async (domainName: string) => {
  const TableName = process.env.REGISTRY_LOOKUP_TABLE;
  if (!TableName) {
    throw new Error(Errors.MISSING_TABLE_NAME);
  }
  const Key = {
    identityType: "domainName",
    identityKey: `${domainName}`,
  };
  const {Item} = await ddb.get({TableName, Key}).promise();
  return Item && Item.organizationId;
};

const queryOrganizationStatus = async (status: OrganizationStatus) => {
  const TableName = process.env.REGISTRY_LOOKUP_TABLE;
  const IndexName = process.env.ORGANIZATION_STATUS_INDEX;

  if (!TableName || !IndexName) {
    throw new Error(Errors.MISSING_TABLE_NAME);
  }

  const params = {
    TableName,
    IndexName,
    KeyConditionExpression: "approvalStatus = :approvalStatus",
    ExpressionAttributeValues: {
      ":approvalStatus": status,
    },
  };
  const {Items, Count} = await ddb.query(params).promise();
  const keys: string[] = Items
    ? Items.map(({organizationId}) => `${organizationId}/meta.json`)
    : [];
  return {keys, totalCount: Count};
};

const registry: RegistryStore = {
  async fetch({organizationId, domainName}) {
    try {
      if (organizationId) {
        return await getOrganization(`${organizationId}/meta.json`);
      }

      if (domainName) {
        const newOrganizationId = await getOrganizationId(domainName);
        if (newOrganizationId) {
          const organization = await getOrganization(
            `${newOrganizationId}/meta.json`
          );
          return organization;
        }
      }
    } catch (e) {
      console.log(e);
    }
    return null;
  },
  async fetchAll({filter}) {
    const {keys} = filter
      ? await queryOrganizationStatus(filter)
      : await listOrganizations();
    return await Promise.all(keys.map(getOrganization));
  },
};

export default registry;
