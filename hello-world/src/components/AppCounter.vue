<script>
import { defineComponent, ref } from 'vue'
/*
// Version de Option Api
export default defineComponent({
  name: 'AppCounter',
  components: {
   
  },
  data() {
    let counter = 0
    return {
      counter
    }
  },
  methods: {
    addCounter() {
      this.counter++
    },
    restCounter() {
      this.counter--
    }
  }
})
*/

// Version de Composition Api
export default defineComponent({
  name: 'AppCounter',
  setup() {
    let counter = ref(0)
    const addCounter = () => {
      counter.value++
    }
    const restCounter = () => {
      counter.value--
    }

    return {
      counter,
      addCounter,
      restCounter
    }
  }
})
</script>
<template>
  <h3 class="">{{ counter }}</h3>
  <button
    class="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 border border-bg-blue-700 rounded-full"
    @click="addCounter"
  >
    Incrementar
  </button>
  <button
    class="bg-red-500 hover:bg-red-700 text-white px-4 py-2 border border-bg-blue-700 rounded-full"
    @click="restCounter"
  >
    Incrementar
  </button>
</template>
