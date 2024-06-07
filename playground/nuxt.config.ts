export default defineNuxtConfig({
  extends: ['@nuxt/ui-pro'],
  modules: [
    '@inkbird-io/nuxt-auth-utils',
    '@nuxt/ui',
  ],
  auth: {},
  ui: {
    icons: ['simple-icons'],
  },
  devtools: { enabled: true },
  imports: {
    autoImport: true,
  },
  runtimeConfig: {
    oauth: {
      discord: {
        clientId: process.env.NUXT_OAUTH_DISCORD_CLIENT_ID || 'crapId',
        clientSecret: process.env.NUXT_OAUTH_DISCORD_CLIENT_SECRET || 'crapSecret'
      },
    }
  }
})
