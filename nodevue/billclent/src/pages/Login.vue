<template>
  <div class="logincon">
    <div class="formcon">
      <div class="formgroup">
        <input class="username" name="username" type="text" placeholder="输入用户名或手机号"/>
      </div>
      <div class="formgroup">
        <input class="pwd" name="pwd" type="password" placeholder="输入您的密码"/>
      </div>
      <div class="formbtn">
        <button class="confirmbtn">登录</button>
        <button class="maybtn"><router-link to="/register">注册</router-link></button>
      </div>
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
    border:1px solid $mainColor
    .formcon
      margin auto
      display flex
      flex-flow column
      padding 1rem
      &>div
        flex 1
        width 100%
        margin 0.2rem auto
      .formgroup>input
        height 0.8rem
        width 80%
        margin auto
        border 0.01rem solid #999
        font-size 0.4rem
        padding-left 0.2rem
      .formbtn
        display flex
        justify-content space-around
        &>button
          border 0.01rem solid #999
          width 2rem
          height 1rem
          border-radius 0.2rem
          font-size 0.4rem

</style>
