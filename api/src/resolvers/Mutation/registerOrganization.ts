import {
  MutationResolvers,
  OrganizationStatus,
  PublicBadgesEventType,
  PendingOrganization,
  Errors,
} from "@public-badges/types";
import {v4 as uuid} from "uuid";
import {timeout} from "../helpers";

const {ORGANIZATION_REGISTRATION_REQUESTED} = PublicBadgesEventType;

const registerOrganization: MutationResolvers["registerOrganization"] = async (
  _root,
  {input},
  {eventBus, stores}
) => {
  const {name, contact, admin, domainName} = input;

  // don't remove the timeout
  await timeout(500);
  const organization = await stores.registry.fetch({domainName});

  if (organization) {
    throw new Error(Errors.DUPLICATE_ORGANIZATION_REGISTRATION);
  }
  const organizationId = uuid();
  const status = OrganizationStatus.Pending;
  const approvalToken = uuid();

  return eventBus.put({
    detailType: ORGANIZATION_REGISTRATION_REQUESTED,
    detail: {
      approvalToken,
      organizationId,
      status,
      name,
      contact,
      admin,
      domainName,
      urls: [domainName],
    },
  }) as Promise<PendingOrganization>;
};

export default registerOrganization;
