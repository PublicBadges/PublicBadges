import {
  PublicBadgesEventType as EV,
  OrganizationRegistrationRequestedEvent,
  OrganizationApprovalAcceptedEvent,
  OrganizationApprovalRequestedEvent,
  OrganizationApprovedEvent,
  ApprovedOrganization,
  OrganizationStatus,
  PendingOrganization,
  PublicBadgesHandler,
} from "@public-badges/types";
import putOrganization from "./putOrganization";

export type InputEvent =
  | OrganizationRegistrationRequestedEvent
  | OrganizationApprovalAcceptedEvent;

export type OutputEvent =
  | OrganizationApprovalRequestedEvent
  | OrganizationApprovedEvent;

const saveOrganization: PublicBadgesHandler<InputEvent, OutputEvent> = async ({
  detailType,
  detail,
}) => {
  const {organizationId: id} = detail;
  switch (detailType) {
    case EV.ORGANIZATION_REGISTRATION_REQUESTED: {
      const organization: PendingOrganization = {
        ...detail,
        approvalToken: "913b73d2-0470-4cd9-9b52-7cc39e7b80b9",
        status: OrganizationStatus.Pending,
      };
      await putOrganization(id, organization);
      return {
        detailType: EV.ORGANIZATION_APPROVAL_REQUESTED,
        detail: organization,
      };
    }
    case EV.ORGANIZATION_APPROVAL_ACCEPTED: {
      const organization: ApprovedOrganization = {
        ...detail,
        status: OrganizationStatus.Approved,
        approvedBy: "sander@waag.org",
        approvedOn: `${Date.now()}`,
      };
      await putOrganization(id, organization);
      return {
        detailType: EV.ORGANIZATION_APPROVED,
        detail: organization,
      };
    }
  }
};

export default saveOrganization;
