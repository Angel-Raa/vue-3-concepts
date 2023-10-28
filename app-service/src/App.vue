<script setup lang="ts"></script>

<template>
  <div>
    <nav class="nav">
      <ul class="nav-item">
        <RouterLink class="nav-link" :to="{ name: 'home' }">Home</RouterLink>
        <RouterLink class="nav-link" :to="{ name: 'post' }">Post</RouterLink>
      </ul>
    </nav>

    <RouterView />
  </div>
</template>
