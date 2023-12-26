<script setup>

//创建promise
new Promise(function (resolve, reject) {
  console.log("promise做事")
  // resolve("彩礼88w")
  reject("滚")
}).then(response => {
  console.log(response)
}).catch(error => {
  console.log(error)
})

</script>

<template>
  <div>
    <h1>app5</h1>
  </div>
  <hr>
  <!--  视图要添加-->
  <router-view></router-view>

</template>

<style scoped>

</style>
