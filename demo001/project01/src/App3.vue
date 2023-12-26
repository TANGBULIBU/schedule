<script setup>

import {useRouter} from "vue-router";

//js发送给Home
//useRouter创建动态路由对象
let myrouter = useRouter();
function tohome(){
  myrouter.push({path:"/toHome",query:{usex:'女',uage:'23'}})
}
</script>

<template>
  <div>
   <h1>app3</h1>
    <input type="button" value="go to home" @click="tohome()">
  </div>
  <hr>
<!--  视图要添加-->
  <router-view></router-view>

</template>

<style scoped>

</style>
