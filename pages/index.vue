
<script setup>

import { useAppStore } from '@/stores/app';
let store = useAppStore();
const description = store.description;
const h1  = store.h1;
const title = store.title;

useHead({
  title: title,
  meta: [{
    name: 'description',
    content: description
  }],
});
</script>

<template>
  <div class="container">
    <h1>{{h1}}</h1>
    <EntryListing />
  </div>
</template>
