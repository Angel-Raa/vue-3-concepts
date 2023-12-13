<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();

const id = ref();
id.value = route.params.id;
</script>

<template>
  <h3>Id {{ id }}</h3>
</template>
