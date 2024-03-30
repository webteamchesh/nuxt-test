
<script setup>
// Bring in the items from Pinia.
import { useAppStore } from '@/stores/app';
let store = useAppStore();
const items = [...store.getItems];

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
