import { Webhooks } from "@octokit/webhooks";
import { createSpotVM, terminateSpotVM } from "~/utilities/oracle";

export default defineEventHandler(async (event) => {
    const runtimeConfig = useRuntimeConfig();

    const webhooks = new Webhooks({
        secret: runtimeConfig.githubWebhookSecret,
    });

    webhooks.on('workflow_job', async ({ id, name, payload }) => {
        console.log('workflow_job', id, name, payload);
        const workflow_id = payload.workflow_job.id.toString();

        if (payload.action === "queued") {
            const response = await createSpotVM(runtimeConfig.ociCompartmentId, "GsOY:US-CHICAGO-1-AD-1", workflow_id);
            console.log(response);
        } else if (payload.action === "completed") {
            // delete VM
            const response = await terminateSpotVM(runtimeConfig.ociCompartmentId, workflow_id);
            console.log(response);
        }
    });



    const requestID = getHeader(event, "x-github-delivery");
    const eventName = getHeader(event, "x-github-event");
    const payload = await readRawBody(event);
    const signature = getHeader(event, "x-hub-signature-256");

    if (!requestID || !eventName || !payload || !signature) {
        throw createError({
            status: 400,
            message: "Missing required headers",
            fatal: true,
        });
    }

    const name = eventName as never;

    try {
        await webhooks.verifyAndReceive({ id: requestID, name, payload, signature });

        return { status: 200 };
    } catch (error) {
        console.error(error);
        throw createError({
            status: 400,
            message: "Internal server error",
            fatal: true,
        });
    }
});