
<script setup>
// Bring in the items from Pinia.
import { useEntriesStore } from '@/stores/entries';
const entriesStore = useEntriesStore;
let store = entriesStore();
const items = [...store.copyItems];

// Toggle case function to test js in clinet.
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
  <div class="listing">
    <h2 class="fs-3">Entry listing</h2>
    <ul v-if="items">
      <li v-for="item in items" :key="item.sys.id">
        <NuxtLink :to="`/entries/${item.sys.slug}`">{{item.title}}</NuxtLink>
      </li>
    </ul>
    <button class="btn btn-dark" type="button" @click="toggle">
      Toggle case
    </button>
  </div>
</template>
