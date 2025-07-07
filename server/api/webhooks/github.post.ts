import { Webhooks } from "@octokit/webhooks";
import { createSpotVM, terminateSpotVM } from "~/utilities/oracle";

const availabilityDomains = [
    "GsOY:US-CHICAGO-1-AD-1",
    "GsOY:US-CHICAGO-1-AD-2",
    "GsOY:US-CHICAGO-1-AD-3",
];

const labelConfigs: {
    [key: string]: {
        cpu: number;
        memory: number; // in GB
        disk: number; // in GB
    }
} = {
    'kd-xxl': {
        cpu: 16,
        memory: 64,
        disk: 100,
    }
}

export default defineEventHandler(async (event) => {
    const runtimeConfig = useRuntimeConfig();

    const webhooks = new Webhooks({
        secret: runtimeConfig.githubWebhookSecret,
    });

    webhooks.on('workflow_job', async ({ id, name, payload }) => {
        console.log('workflow_job', id, name, payload);
        const workflow_id = payload.workflow_job.id.toString();
        const workflow_label = payload.workflow_job.labels.find((label: string) => label !== "self-hosted");

        if (!workflow_label || !labelConfigs[workflow_label]) {
            console.error(`No configuration found for label: ${workflow_label}`);
            return;
        }

        const repo = payload.repository.name;
        const org = payload.organization!.login;

        if (payload.action === "queued") {
            let response;
            for (const ad of availabilityDomains) {
                try {
                    response = await createSpotVM(org, repo, runtimeConfig.ociCompartmentId, ad, workflow_id, workflow_label);
                    console.log(`VM ${response.instance.displayName} created in ${ad}`);
                    break; // Exit loop on success
                } catch (error) {
                    console.error(`Failed to create VM in ${ad}`);
                    console.error(error);
                }
            }
            if (!response) {
                console.error("Failed to create VM in all availability domains.");
            }
        } else if (payload.action === "completed") {
            const response = await terminateSpotVM(runtimeConfig.ociCompartmentId, workflow_id);
            console.log(`VM ${response} terminated`);
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