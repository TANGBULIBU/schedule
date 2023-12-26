<script setup>

import {useRouter} from "vue-router";

//js发送给Home
let myrouter = useRouter();
function tohome2(){
  myrouter.push({path:"/toHome",query:{usex:'男',uage:'18'}})
}
</script>

<template>
  <div>
   <h1>app4</h1>
    <input type="button" value="go to home2" @click="tohome2()">
  </div>
  <hr>
<!--  视图要添加-->
  <router-view></router-view>

</template>

<style scoped>

</style>
