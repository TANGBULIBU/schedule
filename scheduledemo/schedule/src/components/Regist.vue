<script setup>
import {ref, reactive} from 'vue'
import axios from "axios";
import myrouter from "../router/router.js";
// 响应式数据,保存用户输入的表单信息
let registUser = reactive({
  username: '',
  userPwd: ''
})
// 响应式数据,保存校验的提示信息
let reUserPwd = ref('')
let reUserPwdMsg = ref('')
let usernameMsg = ref('')
let userPwdMsg = ref('')
let usernameflag = false;


// 校验用户名的方法
function checkUsername() {
  // 定义正则
  let usernameReg = /^[a-zA-Z0-9]{5,10}$/
  // 校验
  if (!usernameReg.test(registUser.username)) {
    // 提示
    usernameMsg.value = "不合法"
    // return false
    usernameflag = false;
  } else {
    //校验用户名是否被占用
    axios.get("http://localhost:80/user/checkuname", {params: {uname: registUser.username}})
        .then(response => {
          usernameMsg.value = response.data.message;
          if (response.data.message == "用户名可用") {
            usernameflag = true
          } else {
            usernameflag = false
          }
        })
        .catch(err => {
          console.log("发送请求失败")
          return err
        })
  }


  // 通过校验
  // usernameMsg.value = "OK"
  // return true
}

// 校验密码的方法
function checkUserPwd() {
  // 定义正则
  let passwordReg = /^[0-9]{6}$/
  // 校验
  if (!passwordReg.test(registUser.userPwd)) {
    // 提示
    userPwdMsg.value = "不合法"
    return false
  }
  // 通过校验
  userPwdMsg.value = "OK"
  return true
}

// 校验密码的方法
function checkReUserPwd() {
  // 定义正则
  let passwordReg = /^[0-9]{6}$/
  // 校验
  if (!passwordReg.test(reUserPwd.value)) {
    // 提示
    reUserPwdMsg.value = "不合法"
    return false
  }
  console.log(registUser.userPwd, reUserPwd.value)
  // 校验
  if (!(registUser.userPwd == reUserPwd.value)) {
    // 提示
    reUserPwdMsg.value = "不一致"
    return false
  }
  // 通过校验
  reUserPwdMsg.value = "OK"
  return true
}

function toreg() {
  if (usernameflag && checkUserPwd() && checkReUserPwd()) {
    //发送请求
    axios.post("http://localhost:80/user/toregist", registUser)
        .then((response) => {
          //注册成功
          console.log(response)
          if (response.data.message) {
            alert("response.data.message" + response.data.message);
            myrouter.push({path: "/login"})
          } else {
            alert(response.data.message)
          }
        }).catch(err => {
      console.log("发送请求失败")
      return err;
    })
  }else{
    alert("表单有误");
  }
}
</script>
<template>
  <div>
    <h3 class="ht">请注册</h3>
    <table class="tab" cellspacing="0px">
      <tr class="ltr">
        <td>请输入账号</td>
        <td>
          <input class="ipt"
                 id="usernameInput"
                 type="text"
                 name="username"
                 v-model="registUser.username"
                 @blur="checkUsername()">

          <span id="usernameMsg" class="msg" v-text="usernameMsg"></span>
        </td>
      </tr>
      <tr class="ltr">
        <td>请输入密码</td>
        <td>
          <input class="ipt"
                 id="userPwdInput"
                 type="password"
                 name="userPwd"
                 v-model="registUser.userPwd"
                 @blur="checkUserPwd()">
          <span id="userPwdMsg" class="msg" v-text="userPwdMsg"></span>
        </td>
      </tr>
      <tr class="ltr">
        <td>确认密码</td>
        <td>
          <input class="ipt"
                 id="reUserPwdInput"
                 type="password"
                 v-model="reUserPwd"
                 @blur="checkReUserPwd()">
          <span id="reUserPwdMsg" class="msg" v-text="reUserPwdMsg"></span>
        </td>
      </tr>
      <tr class="ltr">
        <td colspan="2" class="buttonContainer">
          <input class="btn1" type="button" value="注册" @click="toreg()">
          <input class="btn1" type="button" value="重置">
          <router-link to="/login">
            <button class="btn1">去登录</button>
          </router-link>
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
  width: 500px;
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
  width: 60px;
  background-color: antiquewhite;
}

.msg {
  color: gold;
}

.buttonContainer {
  text-align: center;
}
</style>