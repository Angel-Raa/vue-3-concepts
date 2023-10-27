<script setup>
import { onMounted, ref} from 'vue'
import { useRoute } from 'vue-router'

const post = ref('')
onMounted(() => {
  console.log('onMounted.......')
  const router = useRoute() // para accerde a los elemento de params de :to="{name:'blog', params:id}"
  post.value = router.params.id 
})
</script>

<template>
  <h3>Post</h3>
  <p>{{ post }}</p>
</template>
