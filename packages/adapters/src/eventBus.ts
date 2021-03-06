import AWS from "aws-sdk"; // eslint-disable-line import/no-extraneous-dependencies
import { PublicBadgesEventBus } from "@public-badges/types";

const eventBridge = new AWS.EventBridge();

const eventBus: PublicBadgesEventBus = {
    put: async ({ detailType, detail }) => {
        const Source = process.env.HANDLER_NAME;
        if (!Source) {
            throw new Error("The handler name must be set in your environment");
        }

        const DetailType = detailType;
        const Detail = JSON.stringify(detail, null, 2);
        const EventBusName = process.env.EVENT_BUS_NAME;
        const event = {
            Source,
            DetailType,
            EventBusName,
            Detail,
        };
        console.log(event);
        const reply = await eventBridge
            .putEvents({
                Entries: [event],
            })
            .promise();
        console.log(Source, reply);
        return detail;
    },
};

export default eventBus;
