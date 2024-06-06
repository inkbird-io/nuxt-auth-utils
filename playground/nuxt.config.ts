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
})
