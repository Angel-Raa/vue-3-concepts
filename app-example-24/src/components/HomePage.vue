<script setup lang="ts">
import MainLayouts from '@/layouts/MainLayouts.vue'
</script>
<template>
  <MainLayouts>
    <template v-slot:main-content>
      <h2>My Home Main main-content</h2>
    </template>
    <template #section-content>
      <h2>My Home section-content</h2>
    </template>
  </MainLayouts>
</template>
