<script setup>
import { computed, ref } from 'vue'

const VAT = 16.9
const subTotal = ref(null)
const total = computed(() => (subTotal.value * VAT) / 100)
</script>

<template>
  <div class="flex flex-col items-center justify-center p-10">
    <label class="text-gray-700 font-bold" v-font-size>SubTotal</label>
    <input
      type="number"
      v-model="subTotal"
      class="w-full border-2 border-gray-300 p-3 rounded-md"
    />
    <h3 class="text-gray-700 font-bold mt-5" v-custom-size="1.3" v-custom-color:blue>
      Total a pagar:{{ total }} y impuesto amplicado {{ VAT }}
    </h3>
  </div>
</template>
