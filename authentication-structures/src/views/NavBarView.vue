<script setup lang="ts">


</script>
<template>
  <nav class="nav">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <RouterLink class="nav-link active btn btn-link " :to="{ name: 'Home' }"> Home</RouterLink>
      <RouterLink class="nav-link active btn btn-link" :to="{ name: 'auth' }"> Admin</RouterLink>
    </ul>
  </nav>
</template>
