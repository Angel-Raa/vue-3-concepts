<script lang="ts" setup>
import { useCounterStore } from './stores/counter'

const counterStore = useCounterStore()
</script>

<template>
  <main>
    <h2>Counter: {{ counterStore.count }}</h2>
    <button
      @click="counterStore.$increment"
    >
      Incremento
    </button>
    <button
      @click="counterStore.$rest(1)"
    >
      Rest
    </button>
  </main>
</template>
