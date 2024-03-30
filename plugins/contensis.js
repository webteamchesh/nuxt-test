import { Client } from 'contensis-delivery-api';
const client = Client.create({
  rootUrl: `https://cms-chesheast.cloud.contensis.com`,
  accessToken: 'QCpZfwnsgnQsyHHB3ID5isS43cZnthj6YoSPtemxFGtcH15I',
  projectId: 'blockstest',
});

export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      client: client,
    },
  };
});

/* Check the env names
 *rootUrl: `https://cms-${process.env.VUE_APP_ALIAS}.cloud.contensis.com`,
 *accessToken: process.env.VUE_APP_ACCESS_TOKEN,
 *projectId: process.env.VUE_APP_PROJECT_API_ID,
 */
