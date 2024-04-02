<script setup lang="ts">
// Optionally log all the env variables
let keys = Object.keys(process.env);
keys.sort();
let myEnv = keys.reduce((acc,k) => {
  return [...acc, `${k}: ${process.env[k]}`];
}, []);
console.log(myEnv);

// Bring in the Contensis client from plugins.
const { $client } = useNuxtApp();

// Get the query string so we can identify the entry attached to this node.
const query = useRoute().query;

// Set up some state.
const title  = useState('title', "Page not found");
const description = useState('description', "");
const items = useState('items', "[]");
let contentType;

// Use the Contensis client to fetch the entry and set some state.
if (query.entryId) {
  await callOnce(async () => {
    let { data } = await useAsyncData('data', () =>
      $client.entries.get(query.entryId),
    );
    if (data.value) {
      title.value = data.value.entryTitle;
      description.value = data.value.entryDescription;
      contentType = data.value.contentTypeId;
    }
  });
}

// This app is intended to use for a listing page.
// So here we fetch the entries that we need to list.
if (contentType) {
  await callOnce(async () => {
    let { data } = await useAsyncData('data', () =>
      $client.entries.list(contentType),
    );
    if (data.value) {
      items.value = data.value.items;
    }
  });
}

// Set the favicon path.
useHead({
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
});
</script>

<template>
  <div class="container-fluid p-0">
    <MyHeader />
    <NuxtPage />
    <MyFooter />
  </div>
</template>
