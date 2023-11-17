<script lang="ts" setup>
import { ref, watchEffect, watch } from 'vue'
const note = ref('')

/*watchEffect(() => {
    alert(`Se ha modificado el valor : ${note.value} `)
    return {
        note
    }
})
*/
watch(note, () => {
    alert(`Se ha modificado el valor : ${note.value} `)
})
</script>

<template>
  <section>
    <h2>Note:{{ note }}</h2>
    <input v-model="note" type="text" placeholder="Nota" />
  </section>
</template>
