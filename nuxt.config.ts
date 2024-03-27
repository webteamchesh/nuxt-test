export default defineNuxtConfig({
  plugins: [
    '~/plugins/contensis'
  ],
  devtools: { enabled: false },
  css: ["bootstrap/dist/css/bootstrap.min.css"],
  app: {
        buildAssetsDir: 'static',
    },
  modules: [
    '@pinia/nuxt',
  ],
})
