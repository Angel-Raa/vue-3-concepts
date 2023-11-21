<script lang="ts" setup>
import { ref, type Ref } from 'vue'

const username: Ref<String> = ref('Angel')
</script>
<template>
  <nav>
    <select v-model="$i18n.locale">
      <option v-for="locale in $i18n.availableLocales" :key="locale" :value="locale">{{ locale }}</option>
    </select>
  </nav>
  <main>
    <div>
      <h1>{{ $t('msg.avatar', { name: username }) }}</h1>
      <h2>{{ $t('msg.hello') }}</h2>
      <p>{{ $t('msg.content') }}</p>
    </div>
  </main>
</template>

<style>
body {
  background: #000;
  display: flex;
  flex-wrap: nowrap;
  width: auto;
  height: auto;
  justify-content: center;
  color: #90f;
}
nav {
}
div {
  border: 2px solid #09f;
  border-radius: 12px;
  box-sizing: border-box;
  font-size: 16px;
  opacity: 0.9;

  text-align: center;
}

p {
  margin: 12px;
}
</style>
