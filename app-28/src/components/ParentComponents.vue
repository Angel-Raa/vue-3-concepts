<script setup lang="ts">
import ChildComponent from './ChildComponent.vue';
import {ref} from 'vue'
// CONTROL DELEGADO POR REFERENCIA, V-LAZY Y WEBCHUNK
const percentageComponent = ref(0)
const banco =():void => {
    percentageComponent.value.recalculate()
}
</script>

<template>
    <section>
        <p>Y su Hijo</p>
        <ChildComponent  ref="percentageComponent"></ChildComponent>
        <button @click="banco">cuenta Bancaria </button>
    </section>
</template>