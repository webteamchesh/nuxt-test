<script setup>
  // Get the items from the state.
  const items = useState("items");

  // Get entry slug from route.
  const slug = useRoute().params.entryPage;

  // Set item using the route param.
  const item = items.value.find(e => e.sys.slug === slug);

  // Set the metadata for this page.
  useHead({
    title: item.title,
    meta: [{
      name: 'description',
      content: item.description
    }],
  });
</script>

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

