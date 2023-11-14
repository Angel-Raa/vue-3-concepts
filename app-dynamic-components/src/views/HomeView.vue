<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'
const ListLayout = defineAsyncComponent(() => import('../layouts/ListLayout.vue'))
const TableLayout = defineAsyncComponent(() => import('../layouts/TableLayout.vue'))
const CardLayout = defineAsyncComponent(() => import('../layouts/CardLayout.vue'))
const users = ref([
  {
    id: 1,
    username: 'angel-aguero',
    email: 'angel@gail.com'
  },
  {
    id: 2,
    username: 'jose-maria',
    email: 'jose@gmail.com'
  },
  {
    id: 3,
    username: 'maria',
    email: 'maria@gmail.com'
  },
  {
    id: 4,
    username: 'minerva-aguero',
    email: 'minerva@gmail.com'
  }
])

const layout = ref(ListLayout)
const handlerLayout = (cmp) => (layout.value = cmp)
</script>

<template>
  <main>
    <h2>Hola Mundo!</h2>
    <div>
      <button @click="handlerLayout(ListLayout)">Views List</button>
      <button @click="handlerLayout(TableLayout)">Views Table</button>
      <button @click="handlerLayout(CardLayout)">Views Card</button>
    </div>
    <component :is="layout" :users="users" />
  </main>
</template>
