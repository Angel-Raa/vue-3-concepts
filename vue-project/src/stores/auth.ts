import { defineStore } from 'pinia'
import { ref } from 'vue'

export const auth = defineStore('auth', {
  state: () => ({
    isAuth: ref(false)
  }),
  actions: {
    login(email: string, password: string): boolean {
      if (email === 'angel@gmail.com' && password === '12345') {
        this.isAuth = true
        alert('Login con exitos')
        return true
      } else {
        this.isAuth = false
        alert('Login incorrecto')
        return false
      }
    }
  }
})
