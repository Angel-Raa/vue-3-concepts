<script setup lang="ts">


</script>

<template>
    <p>Contado de example :  {{ $count() }}</p>
    <button @click="$sayHi()">Alert</button>
    <button @click="$sayBye()"> Bye</button>
    <RouterView />

</template>