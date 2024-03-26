
<script setup>
const { $client } = useNuxtApp();
const {query} = useRoute();
const keys = Object.keys(query);
let {data} = await useAsyncData('data', () => $client.entries.list({
    contentTypeId: 'test',
    versionStatus: 'latest',
    pageOptions: {
      pageSize: 100,
    },
}));

let items = data.value.items || [];

const toggle = () => {
  items.forEach(
    (item) =>
      (item.title = Array.from(item.title)
        .map((ch) =>
          ch.toUpperCase() === ch ? ch.toLowerCase() : ch.toUpperCase(),
        )
        .join('')),
  );
};
</script>

<template>
  <p>Queries:
  <span v-for="k in keys" :key="k">"{{k}}": "{{query[k]}}"</span></p>
  <h2 class="fs-3">Entry listing</h2>
  <ul v-if="items">
    <li v-for='item in items' :key='item.sys.id'>{{item.title}}</li>
  </ul>
  <button type="button" @click="toggle">Toggle</button>
</template>
