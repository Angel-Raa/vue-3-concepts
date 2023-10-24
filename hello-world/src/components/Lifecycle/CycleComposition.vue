<script setup>
import { onMounted, onUpdated } from 'vue'

onMounted(() => {
  console.log('Hola Mundo desde onMounted.......')
})

onUpdated(() => {
  console.log('Hola Mundo desde onUpdated.......')
})
</script>

<template>
  <div></div>
</template>
