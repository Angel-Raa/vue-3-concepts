<script setup lang="ts">
import { createSignal } from 'vue-signals/solid'
import { signal, computed } from 'vue-signals/angular'
const [count, setCount] = createSignal(0)
const contado = signal(0)
const doble = computed(() => contado() * 2)
</script>

<template>
  <main>
    <h1>Home Views</h1>

    <p>Solid Count : {{ count() }}</p>
    <button @click="setCount((v) => v + 1)">increment</button>
    <section>
      <h2>Angular Contado : {{ contado() }}</h2>
      <h3>Doble: {{ doble() }}</h3>
      <button @click="contado.update((v) => v + 1)">increment</button>
      <button @click="contado.set(0)">Resert</button>
    </section>
  </main>
</template>
<style scoped>
input {
  display: block;
}
</style>
