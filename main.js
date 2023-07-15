import { createApp } from 'vue'
import App from './main.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/assets/tailwind.less'

const app = createApp(App)

app.use(ElementPlus)

app.mount('#app')
