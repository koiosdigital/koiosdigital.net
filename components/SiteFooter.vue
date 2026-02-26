<template>
    <UFooter>
        <template #left>
            <p class="text-muted text-sm">&copy; {{ new Date().getFullYear() }} Koios Digital</p>
        </template>

        <template #right>
            <UButton
                v-for="link in links"
                :key="link.label"
                v-bind="link"
                color="neutral"
                variant="ghost"
            />
        </template>
    </UFooter>
</template>

<script setup lang="ts">
const links = [
    { label: 'About', to: '/about' },
    { label: 'Services', to: '/services' },
    { label: 'Contact', to: '/contact' },
]
</script>
