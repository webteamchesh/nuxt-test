<script setup lang="ts">

// Bring in the Contensis client from plugins.
const  client  = useClient();

// Get the query string so we can identify the entry attached to this node.
const query = useRoute().query;

// Set up some state.
const title  = useState('title', () => "");
const description = useState('description', () => "");
const items = useState('items', () => []);
let contentType;

// Use the Contensis client to fetch the entry and set some state.
await callOnce(async () => {
  if (query.entryId) {
    let { data, error } = await useAsyncData('data', () =>
      client.entries.get(query.entryId),
    );
    if (!error.value) {
      title.value = data.value.title;
      description.value = data.value.description;
      contentType = data.value.contentTypeId;
    } else {
      console.log(error.value);
    }
  } else {
    title.value = "Page not found";
  }
});


// This app is intended to use for a listing page.
// So here we fetch the entries that we need to list.
await callOnce(async () => {
  if (contentType) {
    let { data, error } = await useAsyncData('data', () =>
      client.entries.list(contentType),
    );
    if (!error.value) {
      items.value = data.value.items;
    }
  }
});

</script>

<template>
  <div class="container-fluid p-0">
    <MyHeader />
    <NuxtPage />
    <MyFooter />
  </div>
</template>
