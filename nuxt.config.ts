export default defineNuxtConfig({
  plugins: [
    '~/plugins/contensis'
  ],
  devtools: { enabled: true},
  css: ["bootstrap/dist/css/bootstrap.min.css"],
  app: {
    buildAssetsDir: 'static',
  },
  modules: [
    '@pinia/nuxt',
  ],
});
