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
      '@': resolve('src'),  // @表示当前的src目录路径
      comps: resolve('src/components'), 
      apis: resolve('src/apis'),
      views: resolve('src/utils'),
      routes: resolve('src/routes')
    }
  },
  //配置全局css变量
	// css: {
	// 	preprocessorOptions: {
	// 		scss: {
	// 			additionalData: '@import "@/assets/styles/mixin.scss";',//多个全局样式直接分号引用就行了
	// 		},
	// 	},
	// },
  
  //本地运行配置，以及反向代理配置
  // server: {
  //   host: "0.0.0.0",//指定服务器应该监听哪个 IP 地址。 如果将此设置为 0.0.0.0 或者 true 将监听所有地址，包括局域网和公网地址。
  //   port: 12138,//指定开发服务器端口
  //   strictPort: false, //设为true时端口被占用则直接退出，不会尝试下一个可用端口
  //   https: false,//是否启用 http 2
  //   open: true,//服务启动时自动在浏览器中打开应用
  //   cors: true,//为开发服务器配置 CORS , 默认启用并允许任何源
  //   force: true,//是否强制依赖预构建
  //   hmr: false,//禁用或配置 HMR 连接
  //   // 传递给 chockidar 的文件系统监视器选项
  //   watch: {
  //     ignored: ["!**/node_modules/your-package-name/**"]
  //   },
  //   // 反向代理配置
  //   proxy: {
  //     '/api': {
  //       target: "https://xxxx.com/",// 所要代理的目标地址
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace("/^/api /", '') //重写地址
  //     }
  //   }
  // },
  //打包配置
  build: {
    //传递给 Terser 的更多 minify 选项。 生产环境去除 console debugger
   terserOptions: {
     compress: {
       drop_console: true,
       drop_debugger: true,
     },
   },
   
 //   //浏览器兼容性  "esnext"|"modules"
 //   target: "modules",
 //   //指定输出路径
 //   outDir: "dist",
 //   //生成静态资源的存放路径
 //   assetsDir: "assets",
 //   //小于此阈值的导入或引用资源将内联为 base64 编码，以避免额外的 http 请求。设置为 0 可以完全禁用此项
 //   assetsInlineLimit: 4096,
 //   //启用/禁用 CSS 代码拆分
 //   cssCodeSplit: true,
 //   //构建后是否生成 source map 文件
 //   sourcemap: false,
 //   //自定义底层的 Rollup 打包配置
 //   rollupOptions: {
 //   },
 //   //@rollup/plugin-commonjs 插件的选项
 //   commonjsOptions: {
 //   },
 //   //构建的库
 //   lib: {
 //   },
 //   //当设置为 true，构建后将会生成 manifest.json 文件
 //   manifest: false,
 //   // 设置为 false 可以禁用最小化混淆，
 //   // 或是用来指定使用哪种混淆器
 //   // boolean | 'terser' | 'esbuild'
 //   minify: "terser", //terser 构建后文件体积更小
 //   //设置为 false 来禁用将构建后的文件写入磁盘
 //   write: true,
 //   //默认情况下，若 outDir 在 root 目录下，则 Vite 会在构建时清空该目录。
 //   emptyOutDir: true,
 //   //启用/禁用 brotli 压缩大小报告
 //   brotliSize: true,
 //   //chunk 大小警告的限制
 //   chunkSizeWarningLimit: 500
 },
})

/***
* 注意事项：
*/
//  ● 假设不配置 base 时，打包之后，访问时出现白屏。
//  ● alias 不配置的时候，每次引入文件需要找根目录，比较麻烦。

})
