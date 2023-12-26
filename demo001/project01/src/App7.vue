<template>
  <h1>app7 路由传参</h1>
  <input type="button" value="点我切换到home3" @click="tohome">
  <router-view></router-view>
</template>

<script setup>
//创建动态路由对象
import {useRouter} from "vue-router";

let router = useRouter();

function tohome() {
  router.push({path: "/toHome3", query: {usex: '女', uage: '34'}})
}
</script>

<style scoped>

</style>