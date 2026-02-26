<script setup lang="ts">
const siteUrl = 'https://koiosdigital.net'

useHead({
  htmlAttrs: {
    lang: 'en',
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/img/icon.png',
    }
  ],
})

useSeoMeta({
  ogSiteName: 'Koios Digital',
  ogType: 'website',
  ogImage: `${siteUrl}/img/logo_light.png`,
  twitterCard: 'summary',
})
</script>

<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>