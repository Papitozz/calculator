// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
    head: {
      meta: [
        {name: 'viewport', content: 'width=device-width, initial-scale=1.0'},
        {name: 'charset', content: 'utf-8'}
      ]
    }
  }
})
