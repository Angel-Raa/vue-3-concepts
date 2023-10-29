<script setup lang="ts">
import type { Login } from '@/types'
import { type Ref, ref } from 'vue'

const login: Ref<Login> = ref({
  email: '',
  password: ''
})
</script>

<template>
  <section class="container">
    <h2>Auth</h2>
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Email address</label>
      <input
        required
        v-model="login.email"
        type="email"
        class="form-control"
        id="email"
        placeholder="name@example.com"
      />
    </div>
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Passowrd</label>
      <input required v-model="login.password" type="password" class="form-control" id="password" />
    </div>
    <button class="btn btn-primary">Login</button>
  </section>
</template>
