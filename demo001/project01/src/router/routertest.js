//导入组件
//，，/出文件夹
import Index from "../components/Index.vue";
//导入函数
import {createRouter, createWebHashHistory} from 'vue-router'
//调取函数
const myroute = createRouter({
    history: createWebHashHistory(),
    routes: [{
        path: "/gotoindex",
        component: Index
    }]
})

//前置守卫
myroute.beforeEach((to,from,next)=>{
    console.log(`前置后卫调用,to=${to.path},from=${from.path}`);
    //放行
    next()
})

//后置守卫
myroute.afterEach((to,from)=>{
    console.log(`后置后卫调用,to=${to.path},from=${from.path}`);
})

//默认导出对象
export default myroute