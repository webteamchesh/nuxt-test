
<script setup>
const { $client } = useNuxtApp();
let {data, error} = await useAsyncData('data', () => $client.entries.list({
    contentTypeId: 'test',
    versionStatus: 'latest',
    pageOptions: {
      pageSize: 100,
    },
}));

let items = data.value.items || [];

const date = new Date().toLocaleString('en-GB')

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
  <p>{{date}}</p>
  <h2 class="fs-3">Entry listing</h2>
  <ul v-if="items">
    <li v-for='item in items' :key='item.sys.id'>{{item.title}}</li>
  </ul>
  <button type="button" @click="toggle">Toggle</button>
</template>
