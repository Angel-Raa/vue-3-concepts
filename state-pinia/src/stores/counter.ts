import { defineStore } from 'pinia'
import { type Ref, ref } from 'vue'
/*

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 1
  }),
  getters: {
    count: (state) => state.count * 2
  },
  actions: {
    increment(value: number): void {
      this.$state.count += value
    }
  }
})
*/

/** Setup Stores with Typescript  */
export const useCounterStore = defineStore('counter', () => {
  const count: Ref<number> = ref(1)
  const $increment = (): void => {
    count.value++
  }

  const $rest = (value: number): void => {
    count.value -= value
  }

  return { count, $increment, $rest }
})
