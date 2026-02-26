<template>
    <UContainer>
        <UPageBody class="max-w-xl mx-auto">
            <UPageHeader title="Contact Us" description="Have a project in mind or want to discuss how we can help? Drop us a line — we're happy to talk through your requirements and figure out the best way forward." />

            <UCard>
                <form v-if="!submitted" class="space-y-4" @submit.prevent="onSubmit">
                    <UFormField name="name" label="Name" required>
                        <UInput v-model="form.name" placeholder="Your name" />
                    </UFormField>

                    <UFormField name="email" label="Email" required>
                        <UInput v-model="form.email" type="email" placeholder="you@example.com" />
                    </UFormField>

                    <UFormField name="business" label="Business Name">
                        <UInput v-model="form.business" placeholder="Your business (optional)" />
                    </UFormField>

                    <UFormField name="message" label="Message" required>
                        <UTextarea v-model="form.message" placeholder="Tell us about your project..." :rows="5" autoresize />
                    </UFormField>

                    <div class="flex justify-end items-center gap-4">
                        <p v-if="error" class="text-error text-sm">Something went wrong. Please try again or email us directly.</p>
                        <UButton type="submit" label="Send Message" icon="i-lucide-send" :loading="loading" />
                    </div>
                </form>

                <div v-else class="text-center space-y-2 py-4">
                    <UIcon name="i-lucide-check-circle" class="size-10 text-success mx-auto" />
                    <p class="text-lg font-medium">Thanks for reaching out!</p>
                    <p class="text-muted">We'll get back to you soon.</p>
                </div>
            </UCard>
        </UPageBody>
    </UContainer>
</template>

<script setup lang="ts">
const title = 'Contact | Koios Digital'
const description = 'Get in touch with Koios Digital about your firmware, IoT, PCB design, cloud, or web development project.'

useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
});

const form = reactive({
    name: '',
    email: '',
    business: '',
    message: '',
});

const loading = ref(false);
const submitted = ref(false);
const error = ref(false);

async function onSubmit() {
    loading.value = true;
    error.value = false;

    try {
        const res = await fetch('https://formspree.io/f/xreajvko', {
            method: 'POST',
            headers: { 'Accept': 'application/json' },
            body: JSON.stringify(form),
        });

        if (!res.ok) throw new Error('Submit failed');
        submitted.value = true;
    } catch {
        error.value = true;
    } finally {
        loading.value = false;
    }
}
</script>
