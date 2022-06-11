import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
// 引入pinia
import store from './store' 
// 引入element-plus

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')