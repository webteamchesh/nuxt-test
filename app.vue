
<script setup lang="ts">
const date = new Date().toLocaleString('en-GB')
</script>

<template>
  <div class="container mt-3">
    <h1>Nuxt test</h1>
    <p>{{ date }}</p>
    <entry-listing></entry-listing>
  </div>
</template>

<style scoped>
h1 {
  color: DarkBlue;
}
</style>
