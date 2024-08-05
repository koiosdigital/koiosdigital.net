export default defineNuxtConfig({
  devtools: { enabled: true },

  extends: ['@nuxt/ui-pro'],

  modules: [
    "@nuxt/ui",
    "@nuxtjs/tailwindcss",
    '@nuxt/image',
    '@nuxtjs/sitemap',
    "@nuxt/eslint",
    "@nuxt/fonts",
    "nuxt-svgo"
  ],

  css: ['assets/main.scss'],

  runtimeConfig: {
    matomoUrl: '',
    public: {
      matomoSiteId: '',
    },
    formkitKey: '',
    githubWebhookSecret: '',
    githubPat: '',
    ociTenancyId: '',
    ociUserId: '',
    ociCompartmentId: '',
    ociKeyFingerprint: '',
    ociPrivateKey: '',
    ociRegion: '',
  },

  image: {
    domains: ['koiosdigital.net'],
  },

  formkit: {
    autoImport: true,
  },

  sitemap: {
    cacheMaxAgeSeconds: 3600,
    exclude: ['/**'],
  },

  eslint: {
    // options here
  },

  compatibilityDate: '2024-07-06'
})