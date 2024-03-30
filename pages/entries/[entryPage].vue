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
  import { useAppStore } from '~/stores/app';
  import { storeToRefs } from 'pinia';
  const appStore = useAppStore();
  const  { getItems }  = storeToRefs(appStore);
  const slug = useRoute().params.entryPage;
  // Set item using the route param.
  const item = getItems.value.find(e => e.sys.slug === slug);
  useHead({
    title: item.title,
    meta: [{
      name: 'description',
      content: item.description
    }],
  });
</script>
