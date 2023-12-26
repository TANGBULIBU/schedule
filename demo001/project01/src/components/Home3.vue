<script setup>
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";

//3创建对象接收元素
let usersex = ref('');
let userage = ref(0);

//1创建对象
let route = useRoute();
onMounted(() => {
  console.log("onMounted调用")

  //2获取数据
  console.log(route.query.usex)
  console.log(route.query.uage)

  //4将数据赋值给新对象
  //ref 对象需要使用value赋值
  usersex.value = route.query.usex
  userage.value = route.query.uage
})
</script>

<template>
  <h1>home3</h1>
  年龄:{{ userage }}<br>
  性别:{{ usersex }}
</template>


<style scoped>

</style>