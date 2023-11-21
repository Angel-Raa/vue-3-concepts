import VueLazyLoad from 'vue3-lazyload'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// V-LAZY   
const app = createApp(App)
app.use(VueLazyLoad, {})
app.use(router)

app.mount('#app')
