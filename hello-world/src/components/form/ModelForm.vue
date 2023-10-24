<script setup>
import { ref } from 'vue'
const form = {
  name: ref('')
}
const email = ref('') // email
const agree = ref(false) // checkbox
const inputSelect = ref(false) /// Select
</script>

<template>
  <form class="space-y-4">
    <input
      type="text"
      placeholder="Digite su nombre"
      v-model="form.name.value"
      class="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
    />
    <input
      type="email"
      placeholder="Email"
      v-model="email"
      class="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
    />
    <input type="checkbox" v-model="agree" class="mr-2" /> Acepto los terminos y condiciones
    <select
      v-model="inputSelect"
      id="inputSelect"
      class="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
    >
      <option value="RD">RD</option>
      <option value="MX">MX</option>
      <option value="EEUU">EEUU</option>
      <option value="UK">UK</option>
    </select>
  </form>
</template>
