<script setup lang="ts">
import { onMounted, ref, type Ref, defineExpose } from 'vue';
const percentage:Ref<number> = ref(0);
onMounted(() => {
    // Realizar una consultar
   percentage.value = 24;
})

const recalculate = () => {
    percentage.value = 50;
}
defineExpose({
    recalculate
})
</script>

<template>
    <section>
        <h3>Porcentaje Completado : {{ percentage }}</h3>
    </section>
</template>