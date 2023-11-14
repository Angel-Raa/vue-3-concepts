<script setup lang="ts">
import UserPoint from '@/components/UserPoint.vue';

const props = defineProps(['users'])

</script>


<template>
  <h2>Table</h2>
  <UserPoint v-for="it in props.users" :key="it.id" :users="it"/>
</template>
