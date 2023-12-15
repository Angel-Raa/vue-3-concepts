<script setup lang="ts">
import { ref, onMounted } from "vue";
import { getNotes } from "~/service";
const notes = ref();
onMounted(() => {
    loading()
})

const loading = async () => {
    notes.value = await getNotes()
}
</script>

<template>
  <h2>Posts</h2>
  <div>
    <h1>Title : {{ notes.title }}</h1>
    <p>{{ notes.content }}</p>
  </div>
</template>
