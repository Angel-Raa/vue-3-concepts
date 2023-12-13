<script setup lang="ts">
import { ref, type Ref } from "vue";
const msg: Ref<string> = ref("");
</script>
<template>
  <h1>Hola {{ msg }}</h1>
  <input v-model.lazy="msg" placeholder="msg..." />
</template>
