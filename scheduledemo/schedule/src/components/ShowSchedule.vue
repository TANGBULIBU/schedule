<script setup>
import mystore from "../store/store.js";
import {onMounted} from "vue";
import axios from "axios";
let store001 = mystore();
//钩子函数
onMounted(() => {
  //将login存起的uid获取
  let uid = window.localStorage.getItem("uid");
  axios.get("http://localhost:80/schedule/getlist",{params:{userid:uid}})
      .then((response)=>{
        store001.scheduleList=response.data.data;
      })
      .catch((err)=>{
        console.log("未调取到")
        return err;
      })
})


</script>
<template>
  <div>
    <h3 class="ht">您的日程如下</h3>
    <table class="tab" cellspacing="0px">
      <tr class="ltr">
        <th>编号</th>
        <th>内容</th>
        <th>进度</th>
        <th>操作</th>
      </tr>
      <tr class="ltr" v-for="myschedule,index in store001.scheduleList">
        <td>{{ index + 1 }}</td>
        <td>{{ myschedule.content }}</td>
        <td>{{ myschedule.completed ? "已完成" : "未完成" }}</td>
        <td class="buttonContainer">
          <button class="btn1">删除</button>
          <button class="btn1">保存修改</button>
        </td>
      </tr>
      <tr class="ltr buttonContainer">
        <td colspan="4">
          <button class="btn1">新增日程</button>
        </td>
      </tr>
    </table>
  </div>
</template>
<style scoped>
.ht {
  text-align: center;
  color: cadetblue;
  font-family: 幼圆;
}

.tab {
  width: 80%;
  border: 5px solid cadetblue;
  margin: 0px auto;
  border-radius: 5px;
  font-family: 幼圆;
}

.ltr td {
  border: 1px solid powderblue;
}

.ipt {
  border: 0px;
  width: 50%;
}

.btn1 {
  border: 2px solid powderblue;
  border-radius: 4px;
  width: 100px;
  background-color: antiquewhite;
}

#usernameMsg, #userPwdMsg {
  color: gold;
}

.buttonContainer {
  text-align: center;
}
</style>