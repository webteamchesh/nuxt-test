export default defineNuxtConfig({
  plugins: [
    '~/plugins/contensis'
  ],
  devtools: { enabled: true},
  css: ["bootstrap/dist/css/bootstrap.min.css", "~/assets/main.css"],
  app: {
    buildAssetsDir: '/static/',
  },
});
