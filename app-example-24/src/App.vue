<script setup lang="ts">
import HomePage from './components/HomePage.vue'
import {useMouse} from "./composables/useMouse"
const {x, y} = useMouse();
</script>
<template>
  <HomePage />
  <p>
    X Position {{ x }}<br>
    y Position {{ y }}

  </p>
</template>
