<script setup lang="ts">
import  IExample from './components/IExample.vue';
import { counter } from './stores/counter';
const store = counter();


</script>

<template>

  <main>
      <h2>{{ store.count }}</h2>
      <button @click="store.increment()">añidir</button>
      <button @click="store.resst()">Resta</button>
      <IExample/>
  </main>
</template>
<style scoped>


</style>