<script setup lang="ts">
import {ref, type Ref} from "vue";
const counter:Ref<number> = ref(0);
const increment = () => {
  counter.value ++
}

</script>

<template>
  <main>
   <h1>Home Views </h1>
   <button class="btn" @click="increment()">increment</button>
   <p>{{ counter }}</p> 
  </main>
</template>

<style scoped>
.btn {
  width: 100px;
  height: 30px;
  background-color: #09f;
  border-radius: 12px;
  border: thin solid #000;
}

</style>