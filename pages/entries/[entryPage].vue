<template>
  <div class="container">
      <h1>Entry page</h1>
    <div class="row m-0 listing">
      <h2 class="fs-3">{{item.title}}</h2>
      <p>{{item.description}}</p>
      <p>id: {{item.sys.id}}</p>
      <div>
        <RouterLink to='/' type="button" class="btn btn-dark mt-3">Back</RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
  // Get entries from store.
  import { useEntriesStore } from '~/stores/entries';
  import { storeToRefs } from 'pinia';
  const entriesStore = useEntriesStore();
  const  { copyItems }  = storeToRefs(entriesStore);
  const slug = useRoute().params.entryPage;
  // Set item using the route param.
  const item = copyItems.value.find(e => e.sys.slug === slug);
</script>
