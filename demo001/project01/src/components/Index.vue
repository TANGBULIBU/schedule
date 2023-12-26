<script setup>

//钩子函数
import {onMounted} from "vue";
import {useRoute} from "vue-router";

//导入useRoute（）
let myroute = useRoute();
onMounted(()=>{
  console.log("onMounted()被调用")
  //获取数据 拼接
  console.log(myroute.query.uname)
  console.log(myroute.query.upass)
  //路径传参
  console.log(myroute.params.uname)
  console.log(myroute.params.upass)
})
</script>


<template>
  <div>
    <h1>index.vue</h1>

  </div>
</template>

<style scoped>

</style>