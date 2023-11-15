<script setup lang="ts">
import { ref, type Ref } from 'vue'
interface Note {
  noteId: number
  content: string
}
const hidde: Ref<Boolean> = ref(false)
const notes: Ref<Note[]> = ref([])
const note: Ref<string> = ref('')
const saveNote = (): void => {
  const noteId: number = notes.value.length + 1
  notes.value.push({ noteId, content: note.value })
  note.value = ' '
}
</script>

<template>
  <button class="btn" @click="hidde = !hidde">Toggler</button>
  <Transition>
    <h2 v-if="hidde">Hello World animated <v-icon name="gi-notebook" scale="2"  hover="true" animation="spin-pulse"/></h2>
  </Transition>

  <TransitionGroup name="list-note" tag="ul">
    <li class="nota" v-for="note in notes" :key="note.noteId">
      <v-icon name="md-attachfile-sharp" scale="1" animation="float" title="note"/> {{ note.content }}
    </li>
  </TransitionGroup>
  <input type="text" v-model="note" />
  <button @click="saveNote">Save Note</button>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease-in;
}

.v-enter-from {
  opacity: 0;
}

.v-leave-to {
  opacity: 1;
}

.list-note-enter-active,
.list-note-leave-active {
  transition: opacity 0.5s ease-in;
}

.list-note-enter-from {
  opacity: 0;
}

.list-note-leave-to {
  opacity: 1;
}

.btn {
  background-color: #09f;
  border: 0.2rem solid;
  width: 60px;
  height: 25px;
}

.nota {
  margin: 8px;
}
</style>
