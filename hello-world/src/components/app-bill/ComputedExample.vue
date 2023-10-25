<script setup>
import { computed, ref } from 'vue'

const msg = ref('')
const values = ref(0)
const computedMsg = computed(() => msg.value.split('').reverse().join(''))
const computedValues = computed({
  get: () => values.value + 1.5,
  set: (val) => {
    ;(values.value + 1.5) * val
  }
})
</script>

<template>
  <div class="w-500 h-200 border-1 border-black p-10">
    <h2 class="text-gray-600 text-1xl">Juego de palabras</h2>
    <input type="text" placeholder="Palabras" v-model="msg" />
    <h3>{{ computedMsg }}</h3>
  </div>

  <input type="number" placeholder="0" v-model="values" />
  <p>Valos total ${{ computedValues }}</p>
</template>
