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

  app: {
    head: {
      script: [
        {
          src: '/api/gather/script.js',
          async: true,
          defer: true,
          'data-site-id': '7c7c83d15fc5',
          'data-proxy': '/api/gather'
        },
      ],
    },
  },

  image: {
    domains: ['koiosdigital.net'],
  },

  sitemap: {
    cacheMaxAgeSeconds: 3600,
    exclude: ['/api/**'],
  },

  routeRules: {
    "/api/gather/*.js": {
      cors: true,
      isr: 86400
    },
  },

  eslint: {
    // options here
  },

  compatibilityDate: '2024-07-06'
})