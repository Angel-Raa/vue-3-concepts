import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import example from './plugins/example'
const app = createApp(App)

app.use(example, {
    msg:"Hello World!"
})

app.use(router)

app.mount('#app')
