<script setup lang="ts">
import { type Ref, ref } from 'vue';
import {  type Register } from '@/types';
import { registerProfile } from '../service/index'
const form: Ref<Register> = ref({
  username: '',
  password: '',
  email:""
})
const handlerSign = async() => {
    const response = await registerProfile(form.value);
    console.log(response)
}
</script>

<template>
    <section class="container">
      <h2>Sign</h2>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Username</label>
        <input required v-model="form.username" type="text" class="form-control" id="username" />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Email</label>
        <input required v-model="form.email" type="email" class="form-control" id="email" />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Passowrd</label>
        <input required v-model="form.password" type="password" class="form-control" id="password" />
      </div>
      <button type="submit" @click="handlerSign()" class="btn btn-primary">Login</button>
    </section>
  </template>
  