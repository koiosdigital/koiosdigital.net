<template>
    <UContainer>
        <UPageBody class="wysiwig space-y-6 max-w-3xl mx-auto">
            <UPageHeader title="Terms of Service" :description="`Last updated ${lastUpdated}`" />

            <p>
                These terms cover your use of koiosdigital.net and the services we operate, including
                firmware update endpoints, device APIs, and any associated dashboards or tooling
                (collectively, the "Services"). By using the Services, you agree to these terms. If
                you don't agree, please don't use them.
            </p>

            <h2>Accounts</h2>
            <p>
                Some Services require an account. You're responsible for keeping your credentials
                secure and for activity that happens under your account. Tell us promptly if you
                think your account has been compromised. We may suspend or terminate accounts that
                violate these terms or that put the Services or other users at risk.
            </p>

            <h2>Acceptable use</h2>
            <p>
                Don't use the Services to do anything illegal, harmful, or disruptive. In particular:
            </p>
            <ul class="list-disc pl-6 space-y-2 text-xl">
                <li>Don't attempt to break, probe, or overload the Services or the infrastructure they run on.</li>
                <li>Don't access accounts, devices, or data that aren't yours.</li>
                <li>Don't reverse engineer or interfere with the Services except where the law explicitly allows it.</li>
                <li>Don't use the Services to distribute malware, send unsolicited messages, or violate anyone's rights.</li>
            </ul>

            <h2>Devices and firmware</h2>
            <p>
                If you connect a device to the Services, you're responsible for the device, the
                environment it operates in, and any consequences of how it's deployed. Firmware
                updates are provided as a convenience and to keep devices secure; we do our best to
                make them safe and reversible, but we can't guarantee that every update will be free
                of issues. Run pre-production validation before rolling updates out at scale.
            </p>

            <h2>Service availability</h2>
            <p>
                We aim to keep the Services available and working well, but we don't promise any
                specific uptime or that the Services will be uninterrupted or error-free. We may
                change, suspend, or discontinue parts of the Services at any time. Where reasonable,
                we'll give notice before doing so.
            </p>

            <h2>Your content</h2>
            <p>
                You keep ownership of any data you send to the Services. You grant us the limited
                rights needed to host, process, and deliver that data back to you as part of
                operating the Services. We don't claim ownership of your data and we don't use it
                for anything beyond what's described in our <NuxtLink to="/privacy" class="underline">Privacy Policy</NuxtLink>.
            </p>

            <h2>Disclaimers</h2>
            <p>
                The Services are provided "as is" and "as available," without warranties of any
                kind, whether express or implied, including warranties of merchantability, fitness
                for a particular purpose, and non-infringement, to the maximum extent permitted by
                law.
            </p>

            <h2>Limitation of liability</h2>
            <p>
                To the maximum extent permitted by law, Koios Digital is not liable for any
                indirect, incidental, special, consequential, or punitive damages, or for any loss
                of profits, revenue, data, or goodwill arising from your use of the Services. Our
                total liability for any claim related to the Services is limited to the amount you
                paid us for the Services in the twelve months before the claim, or one hundred US
                dollars, whichever is greater.
            </p>

            <h2>Changes</h2>
            <p>
                We may update these terms from time to time. When we do, we'll update the date at
                the top and, for material changes, give reasonable notice through the Services.
                Continued use after a change means you accept the updated terms.
            </p>

            <h2>Contact</h2>
            <p>
                Questions about these terms? <NuxtLink to="/contact" class="underline">Get in touch</NuxtLink>.
            </p>
        </UPageBody>
    </UContainer>
</template>

<script setup lang="ts">
const title = 'Terms of Service | Koios Digital'
const description = 'The terms that govern your use of Koios Digital websites, firmware update services, and device APIs.'

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
