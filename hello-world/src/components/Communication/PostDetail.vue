<script setup>
import { ref } from 'vue'

const msg = ref('')
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: false,
    default: 'Sin contenido'
  },
  id: {
    type: Number
  }
})

const emit = defineEmits(['handlerAlert', 'deletePost'])

const handlerAlert = () => {
  emit('handlerAlert', msg.value)
}

const deletePost = (id) => {
  emit('deletePost', id)
}
</script>

<template>
  <div class="p-4">
    <div class="mb-4">
      <h2 class="text-xl font-bold mb-2">{{ props.title }}</h2>
      <p class="text-gray-700">{{ props.body }}</p>
      <div class="flex flex-row justify-center">
        <input type="text" placeholder="nombre" v-model="msg" class="p-2 border-gray-300 rounded" />
        <button
          @click="handlerAlert()"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
        >
          Click
        </button>
        <button
          @click="deletePost(props.id)"
          class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-2"
        >
          elimina post
        </button>
      </div>
    </div>
  </div>
</template>
