<script setup lang="ts">
import { type Ref, ref } from 'vue'
const nota: Ref<string> = ref('')
const sendToServer = async () => {
  const response = await fetch('https://example.com', {
    method: 'POT',
    headers: {
      'Content-type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Bearer '
    },
    body: JSON.stringify({
      nota: nota.value
    })
  })

  const data = await response.json()
}
</script>

<template>
  <main>
    <label for="nota">Nota: </label>
    <input type="text" id="nota" name="nota" required v-model="nota"  />
    <button type="button" @click="sendToServer">Enviar</button>
  </main>
</template>
