import {
  PublicBadgesEventType as EV,
  PublicBadgesHandler,
  OpenBadgeArtifactSigned,
} from "@public-badges/types";
import { capitalize } from "voca";
import { registry } from "@public-badges/stores";
import { email } from "@public-badges/adapters";

export type InputEvent = OpenBadgeArtifactSigned;
export type OutputEvent = null;

const sendNotifications: PublicBadgesHandler<InputEvent, OutputEvent> = async ({
  detailType,
  detail,
}) => {
  const approverEmail = process.env.APPROVER_EMAIL;
  const { name, status, recipientId } = detail;
  const { STATUS_CHANGED_TEMPLATE } = process.env;
  const organization = await registry.fetch({
    organizationId: recipientId,
  });
  const badgeName = capitalize(name);
  const organizationName = capitalize(detail.name);
  switch (detailType) {
    case EV.OPEN_BADGES_ARTIFACT_SIGNED: {
      await email.sendTemplate({
        recipients: [
          organization.contact.email,
          organization.admin.email,
          approverEmail,
        ],
        sender: approverEmail,
        templateName: STATUS_CHANGED_TEMPLATE,
        templateData: {
          displayName: organizationName,
          badgeName,
          status,
        },
      });
      return null;
    }
  }
};

export default sendNotifications;
