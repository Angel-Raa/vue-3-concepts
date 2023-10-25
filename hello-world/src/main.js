import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.directive('font-size', {
  beforeMount: (el) => {
    el.style.fontSize = '1.5rem'
  }
})
app.directive('custom-size', {
  beforeMount: (el, binding) => {
    el.style.fontSize = binding.value + 'rem'
  }
})
app.directive('custom-color', {
  beforeMount: (el, binding) => {
    switch (binding.arg) {
      case 'red':
        el.style.color = 'red'
        break
      case 'blue':
        el.style.color = 'blue'
        break
      default:
        el.style.color = 'black'
    }
  }
})
app.mount('#app')
