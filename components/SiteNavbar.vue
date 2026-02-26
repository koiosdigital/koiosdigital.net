<template>
    <UHeader>
        <template #title>
            <div class="md:block hidden">
                <NuxtPicture src="/img/logo_light.png" alt="Logo" class="block dark:hidden max-w-60" />
                <NuxtPicture src="/img/logo_dark.png" alt="Logo" class="hidden dark:block max-w-60" />
            </div>
            <NuxtPicture src="/img/icon.png" alt="Icon" class="block max-w-60 md:hidden h-8 w-8" />
        </template>

        <UNavigationMenu :items="links" />

        <template #right>
            <UColorModeButton />
        </template>

        <template #body>
            <UNavigationMenu :items="links" orientation="vertical" class="-mx-2.5" />
        </template>
    </UHeader>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const links: NavigationMenuItem[] = [{
    label: 'Home',
    icon: 'i-heroicons-home',
    to: '/'
},
{
    label: 'About',
    icon: 'i-heroicons-user-group',
    to: '/about'
},
{
    label: 'Services',
    icon: 'i-heroicons-wrench-screwdriver',
    to: '/services'
},
{
    label: 'Contact',
    icon: 'i-heroicons-envelope',
    to: '/contact'
}
]
</script>