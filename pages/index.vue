
<script setup lang="ts">
definePageMeta({
  layout: 'default'
})
const query = useState('query', "{}");
const date = useState('date', "{}");
const env = useState('env', "[]");
await callOnce(async () => {
  query.value = useRoute().query;
  date.value = new Date().toLocaleString('en-GB')
  try {
    let keys = Object.keys(process.env);
    keys.sort();
    env.value = keys.reduce((acc,k) => {
      return [...acc, `${k}: ${process.env[k]}`];
    }, []);
  } catch(ignore) {
    env.value = [];
  }});


</script>

<template>
  <div class="container">
    <h1>Nuxt test</h1>
    <p>{{ date }}</p>
    <p><strong>Queries:</strong> <span v-for="k in Object.keys(query)" :key="k">"{{k}}": "{{query[k]}}"</span></p>
    <p><strong>Environment variables</strong></p>
    <div class="env mb-3">
      <ul class="list-unstyled">
        <li v-for="e in env" :key="e">{{e}}</li>
      </ul>
    </div>
    <entry-listing></entry-listing>
  </div>
</template>
