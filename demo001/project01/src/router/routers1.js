//导入几个页面
import HOME from '../components/Home.vue'
import HOME3 from "../components/Home3.vue";
import {createRouter, createWebHistory} from "vue-router";

const router = createRouter({
    //存放历史记录
    history: createWebHistory(),
    routes: [{
        path: '/Home',
        component: HOME
    }, {
        //跳转到Home3中 自定义跳转名为toHome3
        path: "/toHome3",
        component: HOME3
    }]
});

//导出操作
export default router;