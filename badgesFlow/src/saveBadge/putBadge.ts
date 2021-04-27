import AWS from "aws-sdk"; // eslint-disable-line import/no-extraneous-dependencies
import {PublicBadge, Errors} from "@public-badges/types";
const s3 = new AWS.S3();

type Save<T> = (id: string, document: T) => Promise<T>;

const putBadge: Save<PublicBadge> = async (id, badge) => {
  const Bucket = process.env.REGISTRY_BUCKET;
  if (!Bucket) {
    throw new Error(Errors.MISSING_BUCKET_NAME);
  }
  const Key = `${id}.json`;
  const reply = await s3
    .putObject({
      Bucket,
      Key,
      Body: JSON.stringify(badge, null, 2),
    })
    .promise();
  console.log(reply);
  return badge;
};

export default putBadge;
