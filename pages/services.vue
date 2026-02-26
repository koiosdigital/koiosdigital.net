<template>
    <UContainer>
        <UPageHeader
            title="What We Do"
            description="We cover the full stack so you don't need a different vendor for every layer. Firmware, hardware, cloud, web. Here's the breakdown."
        />

        <UPageSection
            title="Firmware Development"
            description="We write firmware for microcontrollers and embedded Linux platforms. STM32, ESP32 with ESP-IDF, Nordic nRF, Yocto, Buildroot. If it runs C and talks to hardware, we're comfortable with it."
            icon="i-heroicons-cpu-chip"
            orientation="horizontal"
            :features="[
                { title: 'STM32, ESP32 & Nordic nRF', description: 'We know these platforms inside out. HAL, LL, ESP-IDF, Zephyr, bare-metal. Pick the right tool for the job.', icon: 'i-heroicons-cpu-chip' },
                { title: 'Embedded Linux', description: 'Custom BSPs built on Yocto or Buildroot. Kernel drivers, device trees, rootfs. The whole board support story.', icon: 'i-heroicons-command-line' },
                { title: 'Bootloaders & Secure Boot', description: 'Signed firmware chains with anti-rollback. Hardware root of trust configured properly, not just ticked off a checklist.', icon: 'i-heroicons-shield-check' },
                { title: 'Production Test Fixtures', description: 'Programming jigs, functional test sequences, calibration routines. The boring stuff that makes manufacturing actually work.', icon: 'i-heroicons-wrench-screwdriver' },
            ]"
        >
            <NuxtPicture src="/img/stock/pcb-macro.jpg" alt="Macro shot of a printed circuit board" class="rounded-lg overflow-hidden" sizes="sm:100vw md:50vw lg:600px" loading="lazy" />
        </UPageSection>

        <UPageSection
            title="IoT Solutions"
            description="Getting one device online is a weekend project. Keeping ten thousand of them secure, updated, and monitored is what we do. We build the whole pipeline from the edge to the dashboard."
            icon="i-heroicons-signal"
            orientation="horizontal"
            reverse
            :features="[
                { title: 'Device Provisioning & PKI', description: 'Every device gets a unique identity. Automated certificate enrollment, zero-touch onboarding, proper key management.', icon: 'i-heroicons-key' },
                { title: 'MQTT & Telemetry', description: 'Reliable data pipelines from device to cloud. MQTT brokers, message queues, time-series storage. Built to handle real-world connectivity.', icon: 'i-heroicons-cloud-arrow-up' },
                { title: 'Remote Management', description: 'See what your fleet is doing. Push config changes, run diagnostics, debug issues remotely instead of sending someone out with a laptop.', icon: 'i-heroicons-chart-bar' },
                { title: 'Over-the-Air Updates', description: 'Ship firmware updates to devices in the field. Signed images, staged rollouts, automatic rollback if something goes wrong.', icon: 'i-heroicons-arrow-path' },
            ]"
        >
            <NuxtPicture src="/img/stock/iot-breadboard.jpg" alt="IoT device on a breadboard" class="rounded-lg overflow-hidden" sizes="sm:100vw md:50vw lg:600px" loading="lazy" />
        </UPageSection>

        <UPageSection
            title="Cloud & Infrastructure"
            description="Whether you're moving off an old on-prem setup or building something new, we design infrastructure that stays up and doesn't cost a fortune to run."
            icon="i-heroicons-cloud"
            orientation="horizontal"
            :features="[
                { title: 'Cloud Migration', description: 'We plan the move, execute it, and make sure nothing catches fire along the way. Minimal downtime, no surprises.', icon: 'i-heroicons-arrow-up-tray' },
                { title: 'CI/CD Pipelines', description: 'Automated builds, tests, and deployments. For firmware, backends, web apps. Push code, it goes live.', icon: 'i-heroicons-play-circle' },
                { title: 'Infrastructure as Code', description: 'Terraform, Ansible, containers. Your infrastructure lives in version control, not in someone\'s head.', icon: 'i-heroicons-document-text' },
                { title: 'Backend Services', description: 'APIs and services that scale when they need to and don\'t fall over at 3am.', icon: 'i-heroicons-server-stack' },
            ]"
        >
            <NuxtPicture src="/img/stock/server-rack.jpg" alt="Server racks in a data center" class="rounded-lg overflow-hidden" sizes="sm:100vw md:50vw lg:600px" loading="lazy" />
        </UPageSection>

        <UPageSection
            title="PCB Design & Hardware"
            description="We design boards in Altium Designer. Not just prototypes that work on the bench, but boards that are ready for a contract manufacturer to build in volume."
            icon="i-heroicons-circle-stack"
            orientation="horizontal"
            reverse
            :features="[
                { title: 'Altium Designer', description: 'Multi-layer layout, controlled impedance, power integrity. Proper design rule checks, not just auto-routed and shipped.', icon: 'i-heroicons-square-3-stack-3d' },
                { title: 'BOM Management', description: 'Component selection with alternates lined up. Lifecycle tracking so you don\'t get caught out by an EOL notice mid-production.', icon: 'i-heroicons-clipboard-document-list' },
                { title: 'Design for Manufacturing', description: 'DFM and DFA reviews, panelization, fab drawings, assembly docs. Everything your CM needs to quote and build.', icon: 'i-heroicons-cog-6-tooth' },
                { title: 'Prototype to Production', description: 'We stay with the design from first spin through pilot runs and into volume. No handoff to a different team halfway through.', icon: 'i-heroicons-rocket-launch' },
            ]"
        >
            <NuxtPicture src="/img/stock/motherboard.jpg" alt="Close-up of a motherboard" class="rounded-lg overflow-hidden" sizes="sm:100vw md:50vw lg:600px" loading="lazy" />
        </UPageSection>

        <UPageSection
            title="Web Development"
            description="We build websites and web apps with Nuxt and Vue. Server-rendered, fast, and built with SEO in mind from day one. This site is a good example of our work."
            icon="i-heroicons-globe-alt"
            orientation="horizontal"
            :features="[
                { title: 'Nuxt & Vue', description: 'Type-safe, server-rendered applications. Great developer experience and even better end-user performance.', icon: 'i-heroicons-code-bracket' },
                { title: 'SEO', description: 'Structured data, proper meta tags, sitemaps, performance tuning. The kind of work that actually moves your search rankings.', icon: 'i-heroicons-magnifying-glass' },
                { title: 'Global CDN', description: 'Your site loads fast everywhere. Automatic SSL, edge caching, the works.', icon: 'i-heroicons-globe-alt' },
                { title: 'Responsive & Accessible', description: 'Works on every screen size. Meets accessibility standards. Doesn\'t break in Safari.', icon: 'i-heroicons-device-phone-mobile' },
            ]"
        >
            <NuxtPicture src="/img/stock/developer-workspace.jpg" alt="Developer workspace with multiple screens" class="rounded-lg overflow-hidden" sizes="sm:100vw md:50vw lg:600px" loading="lazy" />
        </UPageSection>

        <UPageSection
            title="Consulting & Architecture"
            description="Not sure where to start? We can review what you've got, help you pick a direction, or put senior engineers on your team for a while."
            icon="i-heroicons-light-bulb"
            orientation="horizontal"
            reverse
            :features="[
                { title: 'Architecture Reviews', description: 'A fresh set of eyes on your system design. We\'ll tell you what\'s solid and what\'s going to cause problems down the road.', icon: 'i-heroicons-document-magnifying-glass' },
                { title: 'Technology Roadmapping', description: 'Choosing platforms, planning migrations, figuring out what to build vs. buy. We help you make those calls with confidence.', icon: 'i-heroicons-map' },
                { title: 'Team Augmentation', description: 'Need extra engineering capacity on a critical project? We embed with your team and hit the ground running.', icon: 'i-heroicons-user-plus' },
                { title: 'Code & Design Audits', description: 'Firmware, PCB, software. We review the work, flag the issues, and give you a clear list of what to fix first.', icon: 'i-heroicons-clipboard-document-check' },
            ]"
        >
            <NuxtPicture src="/img/stock/team-whiteboard.jpg" alt="Team collaborating around a whiteboard" class="rounded-lg overflow-hidden" sizes="sm:100vw md:50vw lg:600px" loading="lazy" />
        </UPageSection>

        <UPageCTA
            title="Have a project in mind?"
            description="Tell us what you're working on. We'll let you know how we can help."
            :links="[{ label: 'Get in Touch', icon: 'i-heroicons-envelope', size: 'lg', to: '/contact' }]"
        />
    </UContainer>
</template>

<script setup lang="ts">
const title = 'Services | Koios Digital'
const description = 'Firmware for STM32 and ESP32, IoT fleet management with OTA and PKI, PCB design in Altium Designer, cloud migration, and web development with Nuxt and Vue.'

useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
});
</script>
