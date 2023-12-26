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
  console.log(myroute.params.usex)
  console.log(myroute.params.uage)
  usersex.value = myroute.params.usex
  userage.value = myroute.params.uage
})
</script>
<template>
  <h1>Home2.vue</h1>
  年龄：{{ userage }}性别:{{ usersex }}
</template>


<style scoped>

</style>