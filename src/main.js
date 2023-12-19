import { createApp } from 'vue'
import router from '@/routers/index.js'
import App from '@/App.vue'
import '@arco-design/web-vue/dist/arco.css'
import ArcoVue from '@arco-design/web-vue'

// 额外引入图标库
import ArcoVueIcon from '@arco-design/web-vue/es/icon'

// 创建并挂载根实例
const app = createApp(App)
//确保 _use_ 路由实例使
//整个应用支持路由。
app.use(router).use(ArcoVue).use(ArcoVueIcon)

app.mount('#app')
