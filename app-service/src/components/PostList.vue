<script setup lang="ts">
import { ref, type Ref, onMounted } from 'vue'
import { type Post } from '@/types'
import { getAllPosts } from '@/service'

const posts: Ref<Array<Post>> = ref([])
onMounted(async () => {
  posts.value = await getAllPosts()
})
</script>

<template>
  <section v-for="post in posts" :key="post.id" class="mb-4 container">
    <h2 class="text-2xl font-bold">{{ post.title }}</h2>
    <p class="text-sm">{{ post.body }}</p>
  </section>
</template>

<style scoped></style>
