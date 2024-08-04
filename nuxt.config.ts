const ogImageFonts = [
  {
    name: 'larken',
    weight: 500,
    path: '/fonts/Larken.otf'
  },
  {
    name: 'larken',
    weight: 700,
    path: '/fonts/LarkenBold.otf'
  },
  {
    name: 'amandine',
    weight: 500,
    path: '/fonts/Amandine.otf'
  },
  {
    name: 'condor',
    weight: 500,
    path: '/fonts/Condor.ttf'
  },
  {
    name: 'condor',
    weight: 700,
    path: '/fonts/CondorBold.ttf'
  },
]

export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@formkit/nuxt',
    '@nuxtjs/sitemap',
    "@nuxt/eslint",
    "nuxt-og-image"
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
    domains: ['cdn.koiosdigital.net', 'koiosdigital.net'],
  },

  formkit: {
    autoImport: true,
  },

  experimental: {
    componentIslands: true,
  },

  sitemap: {
    cacheMaxAgeSeconds: 3600,
    exclude: ['/**'],
  },

  eslint: {
    // options here
  },

  nitro: {
    vercel: {
      config: {
        bypassToken: process.env.NUXT_BYPASS_TOKEN,
      }
    }
  },

  ogImage: {
    fonts: ogImageFonts
  },

  compatibilityDate: '2024-07-06'
})