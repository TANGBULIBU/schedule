//导入组件
//，，/出文件夹
import Index from "../components/Index.vue";
import Home from "../components/Home.vue";
import Home2 from "../components/Home2.vue";
import Home3 from "../components/Home3.vue";
//导入函数
import {createRouter, createWebHashHistory} from 'vue-router'
//调取函数
const myroute = createRouter({
    history: createWebHashHistory(),
    routes: [{
        path:"/testindex2/:usex/:uage",
        name:"toindex2demo",
        component:Home2
    },{
        ///拼接参数
        path: "/toIndex", component: Index
    }, {
        path: "/toIndex/:uname/:upass",//路径传参
        components: {
            default: Index,
            myindex: Index
        }
    }, {
        path: "/toHome",
        components: {
            default: Home,
            myhome: Home
        }
    }, {
        path: "/redirectToHome",
        redirect: "/toHome"
    },
    ]
})


//默认导出对象
export default myroute