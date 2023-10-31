<script setup lang="ts">
import { type Ref, ref } from 'vue'
import { getAuth, signInWithEmailAndPassword, type Auth } from 'firebase/auth'
const email: Ref<string> = ref('')
const password: Ref<string> = ref('')
const auth = (): void => {
  const auth: Auth = getAuth()
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then(() => {
      alert('Exitos.......')
    })
    .catch((error) => {
      console.log(`Error ${error}`)
      alert("Error ")
    })
}
</script>

<template>
  <section class="container">
    <h2>Login con firebase</h2>
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Email</label>
      <input required v-model="email" type="email" class="form-control" id="email" />
    </div>
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Passowrd</label>
      <input required v-model="password" type="password" class="form-control" id="password" />
    </div>
    <button @click="auth()" type="submit" class="btn btn-primary">Login</button>
  </section>
</template>
