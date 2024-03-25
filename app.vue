
<script setup lang="ts">
const date = new Date().toLocaleString('en-GB')
</script>

<template>
  <div>
    <h1>Nuxt test</h1>
    <p>{{ date }}</p>
  </div>
</template>

<style scoped>
h1 {
  color: DarkBlue;
}
</style>
