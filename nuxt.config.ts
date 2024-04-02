export default defineNuxtConfig({
  runtimeConfig: {
   accessToken: process.env.accessToken,
   alias: process.env.alias,
   projectId: process.env.projectId,
  },
  plugins: [
    '~/plugins/contensis'
  ],
  head: {
    link: [{ rel: 'icon', type: 'image/png', href: "~/assets/favicon.png" }]
  },
  devtools: { enabled: true},
  css: ["bootstrap/dist/css/bootstrap.min.css", "~/assets/main.css"],
  app: {
    buildAssetsDir: '/static/',
  },
});
