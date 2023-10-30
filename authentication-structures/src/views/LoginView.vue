<script setup lang="ts">
import type { Login, Response } from '@/types'
import { type Ref, ref } from 'vue'
import { login } from '../service/index'
const form: Ref<Login> = ref({
  username: '',
  password: ''
})

const handlerLogin = async () => {
  const response:Response = await login(form.value)
  
  console.log(response)
}
</script>

<template>
  <section class="container">
    <h2>Login</h2>
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Username</label>
      <input required v-model="form.username" type="text" class="form-control" id="email" />
    </div>
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Passowrd</label>
      <input required v-model="form.password" type="password" class="form-control" id="password" />
    </div>
    <button type="submit" @click="handlerLogin()" class="btn btn-primary">Login</button>
  </section>
</template>
