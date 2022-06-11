import { defineConfig } from 'vite' // 帮手函数，这样不用jsdoc 注解也可以获取类型提示
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()]
})
