<template>
  <div class="home">
    <div class="hometop">
      <div class="hoset">
        <img class="setimg" src="../assets/imgs/set.jpg"/>
      </div>
      <div class="homain">
        <div class="maincon">
          <div class="cil smcil">
            收入：<br/>1234万¥
          </div>
          <div class="cil bgcil" @click="addbill"></div>
          <div class="cil smcil">
            支出：<br/>1万¥
          </div>
        </div>
      </div>
      <div class="hothree">
        <span class="alibill">绑定支付宝账单</span>
        <span class="wechatbill">绑定微信账单</span>
      </div>
    </div>
    <billlist></billlist>
    <div class="shadow"></div>
    <div class="recordbill">
      <div class="inputgroup">
        <label>账目类型</label>
        <select class="billtype" name="billtype">
          <option value="1">记账</option>
          <option value="2">支出</option>
        </select>
      </div>
      <div class="inputgroup">
        <label>资金</label>
        <input class="billmoney" type="number" name="billmoney" />
      </div>
      <div class="inputgroup">
        <label>日期</label>
        <input class="billdate" type="date" name="billdate" />
      </div>
      <div class="inputgroup">
        <label>资金标签</label>
        <div class="billsign">
          <span>
            <input class="bankradio" type="radio" name="billsign" value="1" />
            <span class="b-radio"></span>吃
          </span>
          <span>
            <input class="bankradio" type="radio" name="billsign" value="2" />
            <span class="b-radio"></span>住
          </span>
          <span>
            <input class="bankradio" type="radio" name="billsign" value="3" />
            <span class="b-radio"></span>行
          </span>
          <span>新增</span>
        </div>

      </div>
      <div class="inputgroup">
        <label>备注</label>
        <input class="billdesc" type="text" name="billdesc" />
      </div>
    </div>
  </div>
</template>

<script>
  import billlist from '../components/billlist.vue'
  export default {
    components:{
      billlist
    },
    data(){
      return {
        nono:false
      }
    },
    methods:{
      addbill:function(){
        console.log(111)
      }
    }
  }
</script>

<style lang="stylus">
  .home
    margin 0
    padding 0
    font-size 0.4rem
    position relative
    .hometop
      width 100%
      border-bottom 0.02rem solid red
      padding-bottom 0.2rem
      .hoset
        width 100%
        height 0.8rem
        position relative
        .setimg
          width 0.6rem
          height 0.6rem
          position absolute
          right 0.2rem
          top 0.2rem
      .homain
        width 100%
        height 2.8rem
        box-sizing border-box
        .maincon
          width 100%
          display flex
          justify-content center
          margin-top 0.4rem
          .cil
            border-radius 50%
            border 0.02rem solid red
            text-align center
            padding-top 0.3rem
            box-sizing border-box
          .smcil
            width 20%
            height 1.7rem
          .bgcil
            width 30%
            height 2rem
      .hothree
        width 100%
        display flex
        justify-content space-between
        padding 0 0.2rem
        box-sizing border-box
        .alibill,.wechatbill
          width 30%
          padding 0.3rem
          text-align center
          color #ffffff
        .alibill
          background #69C8EC
        .wechatbill
          background #439057
    .shadow
      position absolute
      height 100vh
      width 100%
      background rgba(0,0,0,0.5)
      top 0
    .recordbill
      width 90%
      position absolute
      top 50%
      background rgba(255,255,255,1)
      padding 0.4rem
      left 50%
      margin-left -45%
      box-sizing border-box
      .inputgroup
        width 100%
        padding 0 0.2rem
        box-sizing border-box
        display flex
        margin 0.3rem 0
        min-height 1rem
        align-items center
        label
          font-size 0.5rem
          width 30%
          textell()
        .billtype,.billmoney,.billdate,.billdesc
          height 0.8rem
          border 0.02rem solid #999
          border-radius 0.1rem
          flex 1
        .billsign
          display flex
        span
          padding 0.1rem
          border 0.02rem solid #999
          margin 0.1rem
          .bankradio
            display: none
          .b-radio
            display: inline-block
            border:1px solid #ccc
            width:16px
            height: 16px
            border-radius:2px
            vertical-align: middle
            margin-right: 5px
            position: relative
          .b-radio:before
            content: ''
            font-size: 0
            width: 10px
            height: 10px
            background: rgb(143, 188, 238)
            position: absolute
            left 50%
            top 50%
            margin-left -5px
            margin-top -5px
            border-radius 2px
            display none
          .bankradio:checked~.b-radio:before
            display block



</style>
