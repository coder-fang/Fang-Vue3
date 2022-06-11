import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
// 引入pinia
import store from './store' 

const app = createApp(App)
app.use(router).use(mount)
app.mount('#app')