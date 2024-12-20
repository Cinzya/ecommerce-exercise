import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PhosphorIcons from '@phosphor-icons/vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(PhosphorIcons)
app.use(router)

app.use(createPinia())
app.mount('#app')
