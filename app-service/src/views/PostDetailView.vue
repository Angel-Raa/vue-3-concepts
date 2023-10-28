<script setup lang="ts">
import { type RouteLocationNormalizedLoaded, useRoute } from 'vue-router'
import { onMounted, ref, type Ref } from 'vue'
import type { Post } from '@/types'
import { getPostById } from '@/service'
const post: Ref<Post | any> = ref()
const router:RouteLocationNormalizedLoaded = useRoute()
onMounted(async () => {
  let postId: string
  if (typeof router.params.id === 'string') {
    postId = router.params.id
  } else if (Array.isArray(router.params.id)) {
    // Aquí podrías seleccionar un elemento específico del arreglo si es necesario.
    postId = router.params.id[0]
  } else {
    // Manejo de otro caso
    throw new Error('ID de ruta no válido')
  }

  try {
    post.value = await getPostById(parseInt(postId))
  } catch (error) {
    console.error(error)
  }
})
</script>

<template>
  <section>
    <details>
      <summary>{{ post.title }}</summary>
      string
      <p>{{ post.body }}</p>
    </details>
    <RouterLink :to="{ name: 'post' }">Volver atrar</RouterLink>
  </section>
</template>
