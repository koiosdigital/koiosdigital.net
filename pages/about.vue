<template>
    <UContainer>
        <UPageBody class="wysiwig space-y-6 max-w-3xl mx-auto">
            <UPageHeader title="About Us" />
            <p>
                We're a small team of engineers who got tired of watching projects stall because the firmware people
                couldn't talk to the cloud people, and nobody wanted to own the hardware. So we built a practice
                that covers the whole stack.
            </p>
            <p>
                Our engineers have shipped firmware on STM32 and ESP32, laid out PCBs in Altium, built cloud
                backends, and deployed web apps. Sometimes all on the same project. That's kind of the point.
            </p>
            <div class="pic">
                <NuxtPicture src="/img/stock/breadboard-components.jpg" alt="Electronic components on a circuit board" sizes="sm:100vw md:768px" loading="lazy" />
            </div>
            <p>
                We work with companies building connected products, industrial systems, and IoT platforms. The
                common thread is that their projects cross boundaries between hardware and software, and they
                need a team that's comfortable on both sides.
            </p>
            <UButton to="/services" color="primary" icon="i-heroicons-wrench-screwdriver" size="xl">What We Do</UButton>
            <p>
                We care about the details that matter in production. Firmware that passes EMC. Boards that
                your CM can actually build. Backends that don't page you at 3am. Sites that load fast on a
                phone in rural Australia.
            </p>
            <div class="pic">
                <NuxtPicture src="/img/stock/data-center.jpg" alt="Server racks in a data center" sizes="sm:100vw md:768px" loading="lazy" />
            </div>
            <p>
                If you've got a project that needs more than one discipline, we should talk. We work best as
                a long-term partner, embedded in your project from early prototyping through to production
                and beyond.
            </p>
            <UButton to="/contact" color="primary" icon="i-heroicons-envelope" size="xl">Get in Touch</UButton>
        </UPageBody>
    </UContainer>
</template>

<script setup lang="ts">
const title = 'About | Koios Digital'
const description = 'A small, senior engineering team that works across firmware, IoT, PCB design, cloud, and web. One team for the whole stack, from prototype to production.'

useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
});
</script>

<style lang="scss">
.wysiwig {
    @apply antialiased;

    h1 {
        @apply text-4xl font-bold;
    }

    h2 {
        @apply text-3xl font-bold;
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

.pic {
    img {
        @apply mx-auto rounded-lg w-full;
    }
}
</style>
