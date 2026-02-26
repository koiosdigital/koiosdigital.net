<template>
    <UContainer>
        <IndexLandingHeader />
        <IndexServices />

        <UPageSection
            title="Firmware that ships"
            description="We write production C for STM32 and ESP32 using ESP-IDF, FreeRTOS, and Zephyr. Full Linux BSPs too, when the project calls for it. If it needs a bootloader, an OTA pipeline, or a factory test jig, we've done it before."
            orientation="horizontal"
            :features="[
                { title: 'Bare-metal & RTOS', description: 'STM32, ESP32, Nordic nRF. We pick the right platform for the job and write tight, reliable code on it.', icon: 'i-heroicons-cpu-chip' },
                { title: 'Secure Boot & OTA', description: 'Signed firmware images, hardware root of trust, and update pipelines that actually roll back when they need to.', icon: 'i-heroicons-shield-check' },
                { title: 'Production Tooling', description: 'Test jigs, factory programming, calibration routines. The stuff that makes volume manufacturing work.', icon: 'i-heroicons-wrench-screwdriver' },
            ]"
        >
            <NuxtPicture src="/img/stock/pcb-closeup.jpg" alt="Close-up of a printed circuit board" class="rounded-lg overflow-hidden" sizes="sm:100vw md:50vw lg:600px" loading="lazy" />
        </UPageSection>

        <UPageSection
            title="IoT without the headaches"
            description="Getting a device online is the easy part. Keeping a fleet of them running, updated, and secure is where it gets interesting. We handle the full pipeline, from provisioning through to the management dashboard."
            orientation="horizontal"
            reverse
            :features="[
                { title: 'Provisioning & PKI', description: 'Automated certificate enrollment and device identity. Every device gets a unique, verifiable identity out of the box.', icon: 'i-heroicons-key' },
                { title: 'Fleet Management', description: 'Dashboards for monitoring, configuration, diagnostics, and pushing updates to thousands of devices at once.', icon: 'i-heroicons-signal' },
                { title: 'Cloud Migration', description: 'Moving legacy on-prem systems into the cloud without bringing everything down for a weekend.', icon: 'i-heroicons-cloud-arrow-up' },
            ]"
        >
            <NuxtPicture src="/img/stock/iot-breadboard.jpg" alt="IoT device on a breadboard with components" class="rounded-lg overflow-hidden" sizes="sm:100vw md:50vw lg:600px" loading="lazy" />
        </UPageSection>

        <UPageSection
            title="Hardware meets software"
            description="We do PCB design in Altium Designer and build websites in Nuxt. Unusual combo, but it means we can take a project from schematic all the way to the customer-facing web app."
            orientation="horizontal"
            :features="[
                { title: 'PCB Design & BOM', description: 'Multi-layer boards, component sourcing, DFM reviews. Designed to actually get manufactured, not just look good in a viewer.', icon: 'i-heroicons-circle-stack' },
                { title: 'Web Applications', description: 'Fast, server-rendered apps with Nuxt and Vue. The same stack this site runs on.', icon: 'i-heroicons-code-bracket' },
                { title: 'Hosting & SEO', description: 'Deployed on a global CDN with proper meta, structured data, and performance tuning baked in.', icon: 'i-heroicons-globe-alt' },
            ]"
        >
            <NuxtPicture src="/img/stock/code-screens.jpg" alt="Code displayed on multiple monitors" class="rounded-lg overflow-hidden" sizes="sm:100vw md:50vw lg:600px" loading="lazy" />
        </UPageSection>

        <IndexLandingFooter />
    </UContainer>
</template>

<script setup lang="ts">
const title = 'Koios Digital | Firmware, IoT, PCB Design & Web Development'
const description = 'Engineering partner for connected products. Firmware for STM32 and ESP32, IoT fleet management, PCB design in Altium, cloud infrastructure, and web apps built with Nuxt.'

useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
});
</script>
