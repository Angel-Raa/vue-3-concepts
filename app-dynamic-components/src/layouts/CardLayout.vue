<script setup lang="ts">
import  UserCard from '@/components/UserCard.vue'

const props = defineProps(['users'])
</script>

<template>
  <h2>Card</h2>
  <div>
    <UserCard v-for="it in props.users" :key="it.id" :users="it"/>
  </div>
</template>
