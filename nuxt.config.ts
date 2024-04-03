export default defineNuxtConfig({
  runtimeConfig: {
   accessToken: process.env.accessToken,
   alias: process.env.alias,
   projectId: process.env.projectId,
  },
  plugins: [
    '~/plugins/contensis'
  ],
  devtools: { enabled: true},
  css: ["bootstrap/dist/css/bootstrap.min.css", "~/assets/main.css"],
  app: {
    buildAssetsDir: '/nuxt-listing/static/',
    baseURL: '/nuxt-listing/'
  },

});
