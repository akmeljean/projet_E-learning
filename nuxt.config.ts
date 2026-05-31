// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  css: ['~/assets/css/theme-lux.css'],

  runtimeConfig: {
    mistralApiKey: '',
    mistralModel: ''
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      link: [
        { rel: 'stylesheet', href: '/legacy/styles.css' },
        { rel: 'stylesheet', href: '/legacy/epoch-styles.css' }
      ],
      script: [
        { src: '/legacy/i18n.js', defer: true, body: true },
        { src: '/legacy/chatbot.js', defer: true, body: true }
      ]
    }
  }
})
