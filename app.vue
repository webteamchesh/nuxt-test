<script setup lang="ts">

import { useAppStore } from '~/stores/app';
const appStore = useAppStore();
const { setItems, setH1, setContentType, setTitle, setDescription } = appStore;
const { $client } = useNuxtApp();

await callOnce(async () => {
  let query = useRoute().query;
  try {
    let { data } = await useAsyncData('data', () =>
      $client.entries.get(query.entryId),
    );
    if (data.value) {
      setTitle(data.value.title);
      setH1(data.value.h1);
      setDescription(data.value.description);
      setContentType(data.value.contentTypeId);
    }
  } catch (error) {
    console.log(error);
  }
});

await callOnce(async () => {
  try {
    let { data } = await useAsyncData('data', () =>
      $client.entries.list({
        contentTypeId: appStore.getContentType,
        versionStatus: 'latest',
        pageOptions: {
          pageSize: 100,
        },
      }),
    );
    if (data.value) {
      setItems(data.value.items);
    }
  } catch (error) {
    console.log(error);
  }
});

useHead({
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
});

</script>
<template>
  <div class="container-fluid p-0">
    <MyHeader />
    <NuxtPage/>
    <MyFooter />
  </div>
</template>
