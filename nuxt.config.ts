export default defineNuxtConfig({
  builder: 'webpack',
  plugins: [
    '~/plugins/contensis'
  ],
  devtools: { enabled: true},
  css: ["bootstrap/dist/css/bootstrap.min.css"],
  app: {
    buildAssetsDir: '/static/',
  },
  modules: [
    '@pinia/nuxt',
  ],
});
