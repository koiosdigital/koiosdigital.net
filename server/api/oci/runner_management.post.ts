import { Webhooks } from "@octokit/webhooks";

export default defineEventHandler(async (event) => {
    const runtimeConfig = useRuntimeConfig();

    const webhooks = new Webhooks({
        secret: runtimeConfig.githubWebhookSecret,
    });

    webhooks.on('workflow_job', async ({ id, name, payload }) => {
        console.log('workflow_job', id, name, payload);
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