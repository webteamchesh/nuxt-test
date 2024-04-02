<script setup>
// This is the listing component, so we need the items we saved in app.vue.
const items = useState("items");

// Toggle case function to test js in client.
const toggle = (arr) => {
  arr.forEach(
    (item) =>
      (item.title = Array.from(item.title)
        .map((ch) =>
          ch.toUpperCase() === ch ? ch.toLowerCase() : ch.toUpperCase(),
        )
        .join('')),
  );
};

</script>


<template>
  <div v-if="items.length" class="row g-0 listing">
    <h2 class="fs-3">Entry listing</h2>
    <ul>
      <!-- When using a v-for, you need to set a key. -->
      <li v-for="item in items" :key="item.sys.id">
        <!-- NuxtLink creates a router link for us. -->
        <!-- This will be a dynamic link to the relevant page. -->
        <NuxtLink :to="`/entries/${item.sys.slug}`">{{item.title}}</NuxtLink>
      </li>
    </ul>
    <button class="btn btn-dark" type="button" @click="toggle(items)">
      Toggle case
    </button>
  </div>
</template>
