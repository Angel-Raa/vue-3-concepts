import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { initializeApp } from 'firebase/app'
import VueCookies from 'vue-cookies'


const app = createApp(App)
const firebaseConfig = {
  apiKey: 'AIzaSyCsObyrMw3i1krOh-GqjUyFcZ1Wh5ZnWGQ',
  authDomain: 'auth-vue-e980d.firebaseapp.com',
  projectId: 'auth-vue-e980d',
  storageBucket: 'auth-vue-e980d.appspot.com',
  messagingSenderId: '69057984636',
  appId: '1:69057984636:web:1468323c08b83114d131f9'
}
initializeApp(firebaseConfig)
app.use(VueCookies, {
  expires: '1d' // para establecer en tiempo de duracion
})

app.use(router)
app.mount('#app')

