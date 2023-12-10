<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }
})

const handler = (msg:string) => {
  console.log("Hola Mundo");
  alert(`Hi ${msg}`)
}
</script>

<template>
  <article>
    <h3> {{ props.title }}</h3>
    <p>{{ props.content }}</p>
    <button @Click="handler('angel')">Click Me</button>
  </article>
</template>

<style scoped>
article {
  display: flex;
  width: auto;
  align-items: center;
  justify-content: center;
}
</style>
