import { defineConfig } from 'vite' // 帮手函数，这样不用jsdoc 注解也可以获取类型提示
import vue from '@vitejs/plugin-vue'  // 识别.vue文件
import viteCompression from 'vite-plugin-compression'  // gzip必备插件，开启gzip、br压缩

// path
const path = require('path')
const resolve = (dir: string) => path.join(__dirname,dir)  //__dirname 总是指向被执行js文件的绝对路径 

// https://vitejs.dev/config/
export default defineConfig({
  // 开发或生产环境服务的公共基础服务路径
  base: './',
  publicDir: 'public',
  // 用于加载env文件的目录
  envDir: 'root',
  // 控制台输出的级别、
  

  plugins: [vue()]
})
