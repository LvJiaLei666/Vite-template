import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import '@/mock'
import '@/assets/main.css'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const app = createApp(App)
// store持久化
const store = createPinia()
store.use(piniaPluginPersistedstate)
app.use(store)
app.use(router)
app.use(ElementPlus)

app.mount('#app')
