<script lang="ts" setup>
import { ref, type Ref } from 'vue'

const counter: Ref<number> = ref(0)
const add = () => counter.value++
const resert = () => counter.value--
</script>

<template>
  <div class="container">
    <p>Counter : {{ counter }}</p>
    <button class="btn-add" @click="add()">Increment</button>
    <button class="btn-resert" @click="resert()">Resert</button>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  width: 100%;
  height: auto;
  justify-content: center;
  align-content: center;
}

.container p {
  font-family: sans-serif;
  color: #09f;
}

.btn-add {
  border-radius: 12px;
  background: #09f;
  border: 2px solid #09f;
}

</style>
