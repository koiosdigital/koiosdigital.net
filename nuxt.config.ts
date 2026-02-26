export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    "@nuxt/ui",
    '@nuxt/image',
    '@nuxtjs/sitemap',
    "@nuxt/eslint",
    "@nuxt/fonts",
    "nuxt-svgo"
  ],

  css: ['assets/main.css'],

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
    ...process.env.NODE_ENV !== 'development' && {
      provider: 'vercel',
    },
    format: ['avif', 'webp', 'png'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
    densities: [1, 2],
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