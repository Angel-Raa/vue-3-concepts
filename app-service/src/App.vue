<script setup lang="ts">
import { ref, type Ref } from 'vue'
import PostList from './components/PostList.vue'

const msg: Ref<String> = ref('')
</script>

<template>
  <div>
    <input v-model.lazy="msg" placeholder="Digite su nombre" />
    <h1>Hola {{ msg }}</h1>
    <PostList />
  </div>
</template>
