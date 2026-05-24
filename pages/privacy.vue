<template>
    <UContainer>
        <UPageBody class="wysiwig space-y-6 max-w-3xl mx-auto">
            <UPageHeader title="Privacy Policy" :description="`Last updated ${lastUpdated}`" />

            <p>
                This policy covers koiosdigital.net and the services we operate (firmware update endpoints,
                device APIs, dashboards, and related infrastructure). The short version: we only collect
                what we need to make the service work, we don't sell your data, and we don't share it with
                third-party trackers or ad networks.
            </p>

            <h2>What we collect</h2>
            <p>
                We collect the minimum information required to operate the services you use:
            </p>
            <ul class="list-disc pl-6 space-y-2 text-xl">
                <li>
                    <strong>Account information.</strong> If you sign in, we store the identifiers your
                    authentication provider returns (such as an email address and a stable user ID) so
                    we can recognise you on return visits and authorise access to your devices.
                </li>
                <li>
                    <strong>Device identifiers.</strong> Devices that connect to our services send a unique
                    device ID, firmware version, and the operational data needed to deliver the service
                    (for example, telemetry you've explicitly enabled or update check-ins).
                </li>
                <li>
                    <strong>Contact form submissions.</strong> When you send us a message we receive the
                    name, email, optional business name, and message body you submit. We use Formspree
                    to handle delivery of that one message; nothing else on the site goes through them.
                </li>
                <li>
                    <strong>Operational logs.</strong> Our servers keep short-lived request logs (IP
                    address, timestamp, path, response code) for security, debugging, and abuse
                    prevention. These are not used to build a profile of you.
                </li>
            </ul>

            <h2>Analytics</h2>
            <p>
                We run our own analytics on our own infrastructure. No third-party analytics or
                advertising scripts run on this site. Analytics events are aggregated and are not tied
                to your account or to any identifier that we use to recognise you across visits. We do
                not use cookies for tracking, and we don't share analytics data with anyone.
            </p>

            <h2>How we use information</h2>
            <p>
                We use the information above to authenticate you, deliver the services you've asked
                for, keep devices updated, respond to your messages, and keep the platform secure. We
                don't use it for advertising, profiling, or any purpose unrelated to running the
                service.
            </p>

            <h2>Sharing</h2>
            <p>
                We don't sell your data and we don't share it with third parties for their own
                purposes. The only third parties involved are the infrastructure providers we use to
                host the service (such as our hosting and CDN providers) and Formspree for contact
                form delivery. They process data on our behalf and only to the extent needed to
                provide their service. We may disclose information if required by law.
            </p>

            <h2>Retention</h2>
            <p>
                Account and device data is kept for as long as your account or device is active. If
                you delete an account or decommission a device, the associated data is removed within
                a reasonable period, except where we are required to retain it for legal or security
                reasons. Request logs are kept only as long as needed for operational purposes and
                then rotated out.
            </p>

            <h2>Your choices</h2>
            <p>
                You can request a copy of the data we hold about you, ask us to correct it, or ask us
                to delete it. Email us and we'll take care of it. If you'd rather not have any data
                collected, simply don't sign in or connect a device — the marketing pages of this site
                work without an account.
            </p>

            <h2>Changes</h2>
            <p>
                If we make material changes to this policy we'll update the date at the top and, where
                appropriate, notify you through the service. Continued use after a change means you
                accept the updated policy.
            </p>

            <h2>Contact</h2>
            <p>
                Questions about this policy or your data? <NuxtLink to="/contact" class="underline">Get in touch</NuxtLink>.
            </p>
        </UPageBody>
    </UContainer>
</template>

<script setup lang="ts">
const title = 'Privacy Policy | Koios Digital'
const description = 'How Koios Digital collects, uses, and protects your data. We only collect what we need to run the service, use self-hosted analytics, and never share with third-party trackers.'

useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
});

const lastUpdated = 'May 24, 2026'
</script>

<style lang="scss">
.wysiwig {
    @apply antialiased;

    h1 {
        @apply text-4xl font-bold;
    }

    h2 {
        @apply text-3xl font-bold pt-4;
    }

    h3 {
        @apply text-2xl font-bold;
    }

    h4 {
        @apply text-xl font-bold;
    }

    p {
        @apply text-xl;
    }
}
</style>
