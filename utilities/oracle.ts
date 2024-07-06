import { SimpleAuthenticationDetailsProvider } from "oci-sdk";
import { Region } from "oci-common";
import type { requests } from 'oci-core';
import { ComputeClient } from 'oci-core';
import { generateCloudInit } from "./cloud-init";
import { Octokit } from '@octokit/core';

export const createAuthenticationProvider = () => {
    const runtimeConfig = useRuntimeConfig();

    const region = Region.US_CHICAGO_1;
    const key = Buffer.from(runtimeConfig.ociPrivateKey, 'base64').toString('utf-8');

    const provider: SimpleAuthenticationDetailsProvider = new SimpleAuthenticationDetailsProvider(
        runtimeConfig.ociTenancyId,
        runtimeConfig.ociUserId,
        runtimeConfig.ociKeyFingerprint,
        key,
        null,
        region
    );

    return provider
}

export const createGithubClient = () => {
    const runtimeConfig = useRuntimeConfig();

    return new Octokit({ auth: runtimeConfig.githubPat });
}

export const listInstances = async (provider: SimpleAuthenticationDetailsProvider) => {
    const client = new ComputeClient({ authenticationDetailsProvider: provider });
    const request = { compartmentId: provider.getTenantId() };
    const response = await client.listInstances(request);
    return response.items;
}

export const createSpotVM = async (compartmentId: string, availabilityDomain: string, job_id: string) => {
    const provider = createAuthenticationProvider();

    const client = new ComputeClient({ authenticationDetailsProvider: provider });
    const githubClient = createGithubClient();

    const github_repo_url = 'koiosdigital'

    const regToken = await githubClient.request('POST /orgs/{org}/actions/runners/registration-token', {
        org: github_repo_url,
        headers: {
            'X-GitHub-Api-Version': '2022-11-28'
        }
    })

    const name = `runner-${job_id}`

    const github_pat = regToken.data.token

    const cloudInit = generateCloudInit(github_repo_url, github_pat);

    const request: requests.LaunchInstanceRequest = {
        launchInstanceDetails: {
            compartmentId: compartmentId,
            availabilityDomain: availabilityDomain,
            displayName: name,
            /*
            preemptibleInstanceConfig: {
                preemptionAction: {
                    preserveBootVolume: false,
                    type: 'TERMINATE'
                }
            },
            */
            metadata: {
                user_data: cloudInit,
                ssh_authorized_keys: "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIEIU3oGsvlU4gDHM3TU+xvftu9GwE5N/NrqLoBM38vio"
            },
            shape: 'VM.Standard.E5.Flex',
            createVnicDetails: {
                assignPublicIp: true,
                subnetId: 'ocid1.subnet.oc1.us-chicago-1.aaaaaaaa3ohdot7cqzdepcw5gmokyzm2sng7rdmltsvgvac2io5asuhwo2mq'
            },
            shapeConfig: {
                ocpus: 32,
                memoryInGBs: 24
            },
            sourceDetails: {
                bootVolumeSizeInGBs: 100,
                bootVolumeVpusPerGB: 120,
                imageId: "ocid1.image.oc1.us-chicago-1.aaaaaaaahhnymd4iyeq6cpyyzrowzzwbmztipsbul2ctk2foqjpvqa5rx5dq",
                sourceType: "image"
            }
        }
    };

    console.log(request);

    const response = await client.launchInstance(request);
    return response;
}

export const terminateSpotVM = async (compartmentId: string, job_id: string) => {
    const provider = createAuthenticationProvider();

    const client = new ComputeClient({ authenticationDetailsProvider: provider });

    //first find the instance
    const request = {
        filter: {
            displayName: job_id
        },
        compartmentId: compartmentId
    }

    const response = await client.listInstances(request);

    if (response.items.length == 0) {
        return;
    }

    const instance = response.items[0];

    const terminateRequest = {
        instanceId: instance.id,
        preserveBootVolume: false
    }

    const terminateResponse = await client.terminateInstance(terminateRequest);

    return terminateResponse;
}