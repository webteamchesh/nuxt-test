<script setup>
  import { useEntriesStore } from '~/stores/entries';
  const entriesStore = useEntriesStore();
  const { setEntries } = entriesStore;
  const { $client } = useNuxtApp();
  let {data, error} = await useAsyncData('data', () => $client.entries.list({
      contentTypeId: 'test',
      versionStatus: 'latest',
      pageOptions: {
        pageSize: 100,
      },
}));

if (data) {
  setEntries(data.value.items);
}

</script>
<template>
  <div>
    <my-header></my-header>
    <slot />
    <my-footer></my-footer>
  </div>
</template>

<style>
.container {
  background-color: Azure;
}
.listing {
  margin-top: 2rem;
  background-color: Wheat;
  padding: .5rem;
}
.footer,
.header {
  background-color: Teal;
}
.footer p,
.header p {
  color: White;
  padding: 0;
  font-size: 2rem;
  text-align: center;
  height: 10vh;
}
.env {
  overflow: scroll;
  height: 15rem;
  font-family: "Monospace";
  padding: .3rem;
  background-color: White;
}
h1 {
  color: DarkGreen;
}
</style>
