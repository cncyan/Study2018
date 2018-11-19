<template>
  <div class="logincon">
    <div class="formcon">
      <div class="formgroup">
        <input class="username" name="username" v-model="username"  type="text" placeholder="输入用户名或手机号"/>
      </div>
      <div class="formgroup">
        <input class="pwd" name="pwd" v-model="pwd" type="password" placeholder="输入您的密码"/>
      </div>
      <div class="formbtn">
        <button class="confirmbtn" @click="billlogin">登录</button>
        <button class="maybtn"><router-link to="/register">注册</router-link></button>
      </div>
    </div>
  </div>
</template>

<script>
  import {login} from '../assets/js/api'
    export default {
      data(){
        return {
          username:"",
          pwd:""
        }
      },
      methods:{
        billlogin:function(){
          if(this.username==""){
            this.$layer.alert("用户名不能为空")
            return
          }else if(this.pwd==""){
            this.$layer.alert("密码不能为空")
            return
          }else{
            var data={
              nickname:this.username,
              phone:this.username,
              password:this.pwd
            }
          }
          login(data).then((res)=>{
            console.log(res)
            if(res.code==0){
                this.$router.replace('/')
            }else{
                if(res.msg=="wrongpwd"){
                    this.$layer.alert("密码错误，请重新输入")
                }else if(res.msg='nouser'){
                    this.$layer.alert("用户不存在，请输入正确账号")
                }
            }
          })
        }
      }
    }
</script>

<style lang="stylus">
  /*@import "../assets/css/base.styl"*/
  .logincon
    border:1px solid $mainColor
    position: absolute
    width 100%
    box-sizing border-box
    top 50%
    margin-top -4rem
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
        height 1.2rem
        width 100%
        box-sizing border-box
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
