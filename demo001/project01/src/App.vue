<script setup>

import {useRouter} from "vue-router";

//调取函数 接收返回对象
let myuseRouter = useRouter();

function toindexmethod() {
  //使用对象请求地址 推送或者导航到新url
  myuseRouter.push({path: "/toIndex"})
}


</script>

<template>
  <div>
    <h1>app.vue</h1>
    <!--    跳转到页面 to自定义请求名 -->
    <router-link to="/toHome"> Home.vue🏠 |</router-link>
    <router-link to="/toIndex"> Index.vue🤫 |</router-link>
    <router-link to="/redirectToHome"> Redirect.vue🫣 |</router-link>
    <br>
    <input type="button" value="跳转到index" @click="toindexmethod()">
    <hr>
    <!--    展示组件内容-->
    <router-view></router-view>
    <router-view name="myhome"></router-view>
    <router-view name="myindex"></router-view>
  </div>

</template>

<style scoped>

</style>
