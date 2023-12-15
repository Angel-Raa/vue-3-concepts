<template>
  <div>
    <nav>
      <ul>
        <li><NuxtLink to="/"> Home </NuxtLink></li>
        <li><NuxtLink to="/about"> About </NuxtLink></li>
        <li><NuxtLink to="/post/"> Post </NuxtLink></li>
        <li><NuxtLink to="/service"> Service </NuxtLink></li>
      </ul>
    </nav>
    <slot />
  </div>
</template>
