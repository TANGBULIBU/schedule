import { createApp } from 'vue'
import './style.css'
import App from './App7.vue'

//导入路由对象
// import myrouter from "./router/routers.js"

//前后置守卫
// import myrouter from "./router/routertest.js"

//练习
import router from "./router/routers1.js"
let myvue = createApp(App)

//路由对象在前
myvue.use(router)
myvue.mount('#app');