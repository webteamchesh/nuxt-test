<script setup lang="ts">

  
// Bring in the Contensis client from plugins.
const { $client } = useNuxtApp();

// Get the query string so we can identify the entry attached to this node.
const query = useRoute().query;

// Set up some state.
const title  = useState('title', () => "");
const description = useState('description', () => "");
const items = useState('items', () => []);
//const path = useState('path', "")
let contentType;

// Get path from node.
//if (query.nodeId) {
//  await callOnce(async () => {
//    let { data } = await useAsyncData('data', () =>
//      $client.nodes.get(query.nodeId),
//    );
//    if (data.value) {
//      path.value = `${data.value.path}/`;
//    }
//  });
//}

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

useHead({
  link: [{ rel: 'icon', type: 'image/png', href: 'favicon.ico' }]
}) 
</script>

<template>
  <div class="container-fluid p-0">
    <MyHeader />
    <NuxtPage />
    <MyFooter />
  </div>
</template>
