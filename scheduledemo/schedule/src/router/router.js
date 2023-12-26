//导入视图信息
import LOGIN from '../components/Login.vue'
import REGIST from '../components/Regist.vue'
import SHOW from '../components/ShowSchedule.vue'
//导入路由

//创建路由对象
import {createRouter, createWebHistory} from "vue-router";

const myrouter = createRouter({
        history: createWebHistory(),
        routes: [{
            path: "/login",
            component: LOGIN
        },{
            path: "/regist",
            component: REGIST
        },{
            path: "/showSchedule",
            component: SHOW
        }
        ]
    }
)
//添加守卫
//前置守卫
myrouter.beforeEach((to,from,next)=>{
    console.log("前置守卫");
    if(to.path=="/showSchedule"){
        //判断用户是否登录？？
        let username= window.localStorage.getItem("uname");
        if(username==null){
            next("/login")  //跳转到登录请求
        }else{
            next()//放行
        }
    }else{
        next() //放行
    }
})
myrouter.afterEach((to,from)=>{})

// //后置守卫
// myrouter.afterEach((to,from)=>{
//     console.log(`后置后卫调用,to=${to.path},from=${from.path}`);
// })
//导出路由对象
export default myrouter