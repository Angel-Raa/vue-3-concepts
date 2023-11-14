<script setup lang="ts">

const props = defineProps(["users"])
</script>
<template>
    <h2>{{ props.users.username }}</h2>

</template>