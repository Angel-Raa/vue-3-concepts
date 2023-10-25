<script setup lang="ts">
import { ref, type Ref } from 'vue'
const counter: Ref<number> = ref(0)
const handlerCounter = (): void => {
  counter.value++
}
</script>

<template>
  <div>
    <h2>{{ counter }}</h2>
    <button @click="handlerCounter" >Suma</button>
  </div>
</template>
