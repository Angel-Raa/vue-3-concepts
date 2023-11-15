import { createApp } from 'vue'
import App from './App.vue'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { MdAttachfileSharp, GiNotebook } from "oh-vue-icons/icons";
const app = createApp(App)

addIcons(MdAttachfileSharp, GiNotebook)
app.component('v-icon', OhVueIcon)
app.mount('#app')
