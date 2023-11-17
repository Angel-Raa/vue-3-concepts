import { defineStore } from 'pinia'

export const counter = defineStore('counter', {
  state: () => {
    return {
      count: 1,
    }
  },
  actions: {
    // opción 2 
    init() {
      const initCount = localStorage.getItem('count')
      if (initCount) {
        this.count = +initCount
      }
    },
    increment() {
      this.count++
      // opción 2 
     // localStorage.setItem('count', this.count.toString())
    },

    resst() {
      this.count--
    }
  },
  getters: {
    doubleCount: (state) => state.count * 2
  },
  //opción 1 cons pinia-plugin-persistedstate
  persist: {
    storage: sessionStorage,
    paths: ['count']
  } // Persistencia de los datos
})
