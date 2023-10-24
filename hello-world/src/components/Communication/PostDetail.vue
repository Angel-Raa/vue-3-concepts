<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: false,
    default: 'Sin contenido'
  }
})

const emit = defineEmits(['handlerAlert'])

const handlerAlert = () => {
    emit("handlerAlert", "angel")
}
</script>

<template>
  <div class="p-4">
    <div class="mb-4">
      <h2 class="text-xl font-bold mb-2">{{ props.title }}</h2>
      <p class="text-gray-700">{{ props.body }}</p>
      <button @click="handlerAlert()">Click</button>
    </div>
  </div>
</template>
