
<script setup lang="ts">
const query = useState();
const date = new Date().toLocaleString('en-GB')
await callOnce(async () => {
  query.value = useRoute().query;

})
</script>

<template>
  <div class="container mt-3">
    <h1>Nuxt test</h1>
    <p>{{ date }}</p>
    <p>Queries: <span v-for="k in Object.keys(query)" :key="k">"{{k}}": "{{query[k]}}"</span></p>
    <p>Env</p>
    <entry-listing></entry-listing>
  </div>
</template>

<style scoped>
h1 {
  color: DarkBlue;
}
</style>
