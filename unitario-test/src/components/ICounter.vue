<script setup lang="ts">
import { ref, type Ref } from 'vue'
const counter: Ref<number> = ref(0)
const increment = (): void => {
  counter.value++
}
</script>
<template>
  <h3>{{ counter }}</h3>
  <button @click="increment()">Increment</button>
</template>


