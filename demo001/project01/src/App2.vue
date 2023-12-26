<script setup>

</script>

<template>
  <div>
    <h1>app2.vue</h1>
    <!--    跳转到页面 to自定义请求名 -->
    <router-link :to="{path:'/toIndex',query:{uname:'zhangsan',upass:'123'}}">
      index.vue🏠
    </router-link>

    <router-link :to="{path:'/toIndex/lisi/123'}">
      路径传参🏠
    </router-link>
    <hr>

    <router-view name="myindex"></router-view>
  </div>

</template>

<style scoped>

</style>
