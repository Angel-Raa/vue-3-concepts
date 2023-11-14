<script lang="ts" setup>
import AuMenu from '../components/AuxBar.vue'
import AuxBar from '../components/AuMenu.vue'
</script>
<template>
  <main class="container">
    <div class="auxbar">
      <AuxBar />
    </div>
    <div class="content">
      <AuMenu />
    </div>
    <div class="main-content">
      <slot name="main-content"></slot>
    </div>
    <div class="section-content">
      <slot name="section-content"> </slot>
    </div>
  </main>
</template>
