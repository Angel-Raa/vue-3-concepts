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
    <RouterLink
      :to="{
        name: 'post-detail',
        params: {
          id: post.id
        }
      }"
    >
      <h2>{{ post.title }}</h2>
    </RouterLink>
  </section>
</template>

<style scoped>
/* Section */
.container {
  padding: 2rem 0;
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.125);
}

/* Title */
.h2 {
  margin-top: 0;
  margin-bottom: 1rem;
  padding: 1.3rem;
}

/* Body */
.p {
  margin-bottom: 1rem;
  padding: 1.3rem;
}
.section {
  text-align: center;
}
</style>
