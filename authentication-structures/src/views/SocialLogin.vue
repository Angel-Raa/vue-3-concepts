<script setup lang="ts">
import { GoogleAuthProvider, signInWithPopup, getAuth, GithubAuthProvider } from 'firebase/auth'
const provider: GoogleAuthProvider = new GoogleAuthProvider()
const providerGitHub: GithubAuthProvider = new GithubAuthProvider()
const auth = getAuth()

const loginGoogle = (): void => {
  signInWithPopup(auth, provider)
    .then((res) => {
      const credential = GoogleAuthProvider.credentialFromResult(res)
      const token = credential?.accessToken
      console.log(token)

      alert('Exitos ')
    })
    .catch((error) => {
      console.log(error)
      throw new Error('Error.....')
    })
}

const loginGithub = () => {
  signInWithPopup(auth, providerGitHub)
    .then((res) => {
      const credential = GithubAuthProvider.credentialFromResult(res)
      const token = credential?.accessToken
      console.log(`Token ${token}`)
      alert('Exitos ')
    })
    .catch((error) => {
      console.log(error)
      throw new Error('Error.....')
    })
}
</script>

<template>
  <section class="container">
    <h2>Social Login</h2>
    <button @click="loginGoogle()">Login con Google</button>
    <button @click="loginGithub()">Login con GitHub</button>
  </section>
</template>
