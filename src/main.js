import { createApp } from 'vue'
import { authModule } from '@/store/authModule'
import App from './App.vue'
import router from '@/router/router'

createApp(App).use(router).use(authModule).mount('#app')
