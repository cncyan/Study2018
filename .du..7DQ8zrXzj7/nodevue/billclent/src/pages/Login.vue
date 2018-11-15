<template>
  <div class="logincon">
    <div class="formcon">
      <div class="formgroup">
        <input type="text" placeholder="输入用户名或手机号"/>
      </div>
      <div class="formgroup">
        <input type="password" placeholder="输入您的密码"/>
      </div>
      <button class="confirmbtn">登录</button>
      <button class="maybtn" @click="login">注册</button>
    </div>
  </div>
</template>

<script>
  import {infos} from '../assets/js/api'
    export default {
      methods:{
        login:function(){
          infos().then((res)=>{
            console.log(res)
          })
        }
      }
    }
</script>

<style lang="stylus">
  @import "../assets/css/base.styl";
  .logincon
    height:100px
    background:$mainColor
</style>
