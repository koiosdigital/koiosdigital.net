<template>
    <UHeader>
        <template #logo>
            <NuxtPicture src="/img/logo_dark.png" alt="Logo" class="hidden dark:block max-w-60" />
            <NuxtPicture src="/img/logo_light.png" alt="Logo" class="block dark:hidden max-w-60" />
        </template>
        <template #right>
            <UHeaderLinks :links />
        </template>
    </UHeader>
</template>

<script setup lang="ts">
const links = [{
    label: 'Home',
    icon: 'i-heroicons-book-open',
    to: '/'
},
{
    label: 'About',
    icon: 'i-heroicons-book-open',
    to: '/about'
},
{
    label: 'Services',
    icon: 'i-heroicons-book-open',
    to: '/services'
},
{
    label: 'Contact',
    icon: 'i-heroicons-book-open',
    to: '/contact'
}
]
</script>