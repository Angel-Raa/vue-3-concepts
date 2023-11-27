<script setup lang="ts">
import { type Ref, ref } from 'vue'
import { auth } from '@/stores/auth'
import router from '@/router'
const stores = auth()
const email: Ref<string> = ref('')
const password: Ref<string> = ref('')
const error: Ref<boolean> = ref(false)
const login = () => {
  error.value = stores.login(email.value, password.value)
  if (stores.isAuth) {
    router.push('/')
  }
}
</script>
<template>
  
  <form @submit.prevent="login()">
    <label for="email"
      >Email :
      <input id="email" type="email" v-model="email"/>
    </label>
    <label for="password"
      >Password:
      <input id="password" type="password" v-model="password" />
    </label>
    <button>Login</button>
    <div v-if="error">
    <p id="error">Invalid credentials</p>
  </div>
  </form>

 
</template>
