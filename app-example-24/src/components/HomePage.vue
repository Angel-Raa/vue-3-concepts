<script setup lang="ts">
import AuMenu from './AuMenu.vue';
import AuxBar from './AuxBar.vue';


</script>
<template>
  <main class="container">
    <div class="auxbar">
    <AuxBar />
    </div>
    <div class="content">
      <AuMenu />
    </div>
    <div>
      <h2>My home content</h2>
    </div>
  </main>
</template>