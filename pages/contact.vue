<template>
    <UContainer>
        <UPageBody class="wysiwig space-y-6 max-w-3xl mx-auto">
            <UPageHeader title="Contact Us" />
            <p>
                Get in touch with our team of expert designers and skilled entrepreneurs, eager to collaborate and
                provide
                solutions that enhance lives and make a significant difference in real-world scenarios.
            </p>

            <UCard>
                <div class="space-y-4">
                    <h2>Email</h2>
                    <p>
                        <a href="mailto:hello@koiosdigital.net">hello@koiosdigital.net</a>
                    </p>
                </div>
            </UCard>
        </UPageBody>
    </UContainer>
</template>

<script setup lang="ts">
useSeoMeta({
    title: 'Contact - Koios Digital',
    description: 'Get in touch with our team of expert designers and skilled entrepreneurs, eager to collaborate and provide solutions that enhance lives and make a significant difference in real-world scenarios.',
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