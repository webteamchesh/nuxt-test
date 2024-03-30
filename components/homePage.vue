
<script setup>
const query = useState('query', "{}");
const date = useState('date', "{}");
const env = useState('env', "[]");
await callOnce(async () => {
  query.value = useRoute().query;
  date.value = new Date().toLocaleString('en-GB')
    let keys = Object.keys(process.env);
    keys.sort();
    env.value = keys.reduce((acc,k) => {
      return k.includes("CONTENSIS") || (k[0].toLowerCase() === k[0]) ? [...acc, `${k}: ${process.env[k]}`] : acc;
    }, []);
  });
</script>


<template>
    <h1>Nuxt test</h1>
    <p>{{ date }}</p>
    <div class="env mb-3">
      <p class="mb-0">
        <strong>Queries</strong>
      </p>
      <ul class="list-unstyled">
        <li v-for="k in Object.keys(query)" :key="k">{{k}}: {{query[k]}}</li>
      </ul>
      <p class="mb-0 mt-2"><strong>Environment variables</strong></p>
      <ul class="list-unstyled">
        <li v-for="e in env" :key="e">{{e}}</li>
      </ul>
    </div>
</template>
