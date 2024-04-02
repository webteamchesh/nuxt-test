<script setup>
// This is the index page, so set the rest of the metadata.
const title = useState("title");
const description = useState("description");

useHead({
    title: title,
    meta: [{
      name: 'description',
      content: description
    }]
});
</script>

<template>
  <div class="container">
    <h1>{{title}}</h1>
    <EntryListing />
  </div>
</template>
