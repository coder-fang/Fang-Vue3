import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
// 引入pinia
import store from './store' 
// 引入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
app.use