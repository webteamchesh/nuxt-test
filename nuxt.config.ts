export default defineNuxtConfig({
  runtimeConfig: {
   accessToken: process.env.accessToken,
   alias: process.env.alias,
   projectId: process.env.projectId,
  },
  devtools: { enabled: true},
  css: ["~/assets/main.css"],
  app: {
    buildAssetsDir: '/cached-assets/',
    baseURL: '/nuxt-listing/',
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: 'favicon.png' },
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css'
        }
      ],
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js',
          tagPosition: 'bodyClose'
        }
      ]
    }
  },
});
