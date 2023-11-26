<script setup lang="ts">
import { type Ref, ref, onMounted } from 'vue'
import { type Post } from '@/types/index'
import { fetchPosts } from '@/service'
const posts: Ref<Array<Post>> = ref([])
const loandig = async () => {
  posts.value = await fetchPosts()
}
onMounted(() => {
  loandig()
})
</script>

<template>
  <article >
    <h2>Listado de Post</h2>
    <section v-for="post in posts" :key="post.id">
      <h3>{{ post.title }}</h3>
      <p>{{ post.body }}</p>
    </section>
  </article>
</template>
