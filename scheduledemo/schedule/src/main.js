import {createApp} from 'vue'
// import './style.css'
import App from './App.vue'

//导入路由
import Router from './router/router.js'

//导入pinia
import {createPinia} from "pinia";

const mypinia = createPinia();

let myvue = createApp(App)


//路由对象在前
myvue.use(Router)
myvue.use(mypinia)
myvue.mount('#app')
