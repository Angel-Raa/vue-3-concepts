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
  <div>
    <ul>
        <li v-for="post in posts" :key="post.id">
            {{ post.title }}
        </li>
    </ul>
  </div>
</template>
