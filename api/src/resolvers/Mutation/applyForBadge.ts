import {
  Errors,
  MutationResolvers,
  OrganizationStatus,
  PublicBadgeStatus,
  PublicBadgesEventType,
  PublicBadge,
} from "@public-badges/types";
import { v4 as uuid } from "uuid";
import { timeout } from "../helpers";

const { BADGE_ISSUANCE_REQUESTED } = PublicBadgesEventType;

const applyForBadge: MutationResolvers["applyForBadge"] = async (
  _root,
  { input },
  { stores, eventBus }
) => {
  const { valueCaseId, domainName } = input;

  // don't remove the timeout
  await timeout(500);
  const organization = await stores.registry.fetch({ domainName });

  if (!organization) {
    throw new Error(Errors.UNKNOWN_ORGANIZATION);
  }

  if (organization.status === OrganizationStatus.Pending) {
    throw new Error(Errors.UNAPPROVED_ORGANIZATION);
  }

  const valueCase = await stores.valueCase.fetch({ valueCaseId });
  if (!valueCase) {
    throw new Error(Errors.MISSING_VALUE_CASE);
  }

  const organizationId = organization.organizationId;
  const badge = await stores.badgeInstance.fetch({
    organizationId,
    valueCaseId,
  });

  if (badge) {
    throw new Error(Errors.DUPLICATE_BADGE_APPLICATION);
  }

  const badgeId = uuid();
  const status = PublicBadgeStatus.Pending;
  const { name, tags, description, narrative } = valueCase;

  return eventBus.put({
    detailType: BADGE_ISSUANCE_REQUESTED,
    detail: {
      badgeId,
      status,
      valueCaseId,
      name,
      tags,
      description,
      narrative,
      recipientId: organizationId,
    },
  }) as Promise<PublicBadge>;
};

export default applyForBadge;
