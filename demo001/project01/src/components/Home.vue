<script setup>
import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";

let usersex = ref('');
let userage = ref(0);

//获取在将内容输出
let myroute = useRoute();
onMounted(() => {
  console.log("onMounted()被调用")
  //获取数据 拼接
  console.log(myroute.query.usex)
  console.log(myroute.query.uage)
  usersex.value = myroute.query.usex
  userage.value = myroute.query.uage
})
</script>
<template>
  <h1>Home.vue</h1>
  年龄：{{ userage }}性别:{{ usersex }}
</template>
<style scoped>

</style>