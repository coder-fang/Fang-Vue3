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
  // 控制台输出的级别 info, warn,error,silent
  logLevel:'info',
  // 设为false,可避免vite清屏而错过早终端打印某些关键信息
  clearScreen: true,
  // plugins 配置需要使用的插件列表
  plugins: [vue(),viteCompression({
    verbose: true,
    disable: true,
    threshold: 10240,
    algorithm: 'gzip',
    ext: '.gz'
  })],
  // 路径相关规则
  resolve:{
    // 配置别名
    alias: {
      '@': resolve('src'),
      comps: resolve('src/components'),
      apis: resolve('src/apis'),
      views: resolve('src/utils'),
      routes: resolve()
    }
  }
})
