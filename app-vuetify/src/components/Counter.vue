<script setup lang="ts">
import {ref, type Ref} from "vue"
const counter:Ref<number> = ref(0);
const increment  = ():void => {
    counter.value++
}
</script>


<template>
    <h2>Counter {{ counter }}</h2>
    <v-btn @Click="increment()">Click Me  </v-btn>
</template>