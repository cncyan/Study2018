<template>
  <div class="home">
    <div class="hometop">
      <div class="homain">
        <div class="maincon">
          <div class="cil smcil">
            收入：<br/>{{totalmoney.getmoney}}¥
          </div>
          <div class="cil bgcil" @click="addbill"></div>
          <div class="cil smcil">
            支出：<br/>{{totalmoney.gavemoney}}¥
          </div>
        </div>
      </div>
      <div class="hothree">
        <span class="alibill">绑定支付宝账单</span>
        <span class="wechatbill">绑定微信账单</span>
      </div>
    </div>
    <billlist :billdata="getmoney"></billlist>
    <billlist :billdata="gavemoney"></billlist>
    <billfoot :actwords="current" class="hofoot"></billfoot>
    <div v-if="isshadow" class="shadow" @click="clearshadow"></div>
    <div v-if="isaddbill" class="recordbill">
      <div class="inputgroup">
        <label>账目类型</label>
        <div class="billtype">
          <select name="billtype">
            <option value="1">记账</option>
            <option value="2">支出</option>
          </select>
          <span class="iconfont icon-down downicon"></span>
        </div>
      </div>
      <div class="inputgroup">
        <label>资金</label>
        <input class="billmoney" type="number" name="billmoney" />
      </div>
      <div class="inputgroup">
        <label>日期</label>
        <input class="billdate" value="2018-11-12" type="date" name="billdate" />
      </div>
      <div class="inputgroup">
        <label>资金标签</label>
        <div class="billsign">
          <label>
            <input class="bankradio" type="radio" name="billsign" value="1" />
            <span class="b-radio"></span>
            <p class="signcon">吃</p>
          </label>
          <label>
            <input class="bankradio" type="radio" name="billsign" value="2" />
            <span class="b-radio"></span>
            <p class="signcon">吃</p>
          </label>
          <label>
            <input class="bankradio" type="radio" name="billsign" value="3" />
            <span class="b-radio"></span>
            <p class="signcon">吃</p>
          </label>
          <label class="addsign" @click="showaddsign"><span class="iconfont icon-add"></span></label>
        </div>
      </div>
      <div class="inputgroup inputsign" v-if="isaddsign">
        <label class="othersignlabel">新标签:</label>
        <input class="othersign" maxlength="2" placeholder="最多输入两个字" type="text" name="othersign" />
        <span style="color:red" class="iconfont icon-icon_cancel signok" @click="addsign"></span>
        <span style="color:green;font-size: 0.72rem" class="iconfont icon-oksignlarge signok" @click="canceladdsign"></span>
      </div>
      <div class="inputgroup">
        <label>备注</label>
        <input class="billdesc" type="text" name="billdesc" />
      </div>
      <button class="notsdd" @click="clearshadow">取消</button>
      <button class="suresdd">确定</button>
    </div>
  </div>
</template>

<script>
  import billlist from '../components/billlist.vue'
  import billfoot from '../components/billfoot.vue'
  import {getbillinfo} from "../assets/js/api";
  export default {
    components:{
      billlist,
      billfoot
    },
    data(){
      return {
        // addbill 弹出层
          isshadow:false,
          isaddbill:false,
        //addsign
          isaddsign:false,
        //虚拟数据
          current:'home',
          totalmoney:{
              getmoney:"1234万",
              gavemoney:"0"
          },
          getmoney:{
              title:"收入",
              mday:"最近30天",
              datalist:[]

          },
          gavemoney:{
              title:"支出",
              mday:"最近30天",
              datalist:[]

          }
      }
    },
    mounted(){
        var _this=this
      getbillinfo().then(function(res,err){
          console.log(res)
          if(res.code==0){
              res.data.forEach((item,index)=>{
              item.date=billsdk.format(item.date)
              if(item.type == 0){
                  if(item.come==0){
                      item.come="来自支付宝"
                  }else if(item.come==1){
                      item.come="来自微信"
                  }else{
                      item.come="记录账单"
                  }
                  _this.gavemoney.datalist.push(item)
              }else{
                  if(item.come==0){
                      item.come="归入支付宝"
                  }else if(item.come==1){
                      item.come="归入微信"
                  }else{
                      item.come="其他账户"
                  }
                  _this.getmoney.datalist.push(item)
              }
              })
          }else{
              console.log("no data")
          }
      })
    },
    methods:{
      addbill:function(){
        this.isshadow=true
        this.isaddbill=true
      },
      clearshadow:function(){
        this.isshadow=false
        this.isaddbill=false
      },
      showaddsign:function(){
          this.isaddsign=true
      },
      addsign:function(){
          this.isaddsign=false
      },
      canceladdsign:function(){
          this.isaddsign=false
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
    padding-bottom 1.4rem
    .hometop
      width 100%
      border-bottom 0.02rem solid red
      padding-bottom 0.2rem
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
      top 15%
      background rgba(255,255,255,1)
      padding 0.4rem
      left 50%
      margin-left -45%
      box-sizing border-box
      .suresdd,.notsdd
        width 40%
        height 1rem
        line-height 1rem
        background $mainColor
        color #fff
        border-radius 0.1rem
        display inherit
        border none
        display inline-block
        margin 4.5%
        box-sizing border-box
      .notsdd
        background #969896
      .inputgroup
        width 100%
        padding 0 0.2rem
        box-sizing border-box
        display flex
        margin 0.3rem 0
        min-height 1rem
        align-items center
        .othersignlabel
          font-size 0.3rem
          text-align right
          padding-right 0.3rem
          width 20%
        label
          font-size 0.5rem
          width 30%
          color #999
          textell()
        .billtype,.billmoney,.billdate,.othersign,.billdesc
          height 0.8rem
          border 0.02rem solid #999
          border-radius 0.1rem
          flex 1
          padding-left 0.2rem
        .othersign
          width 25%
        .signok
          display inline-block
          margin-left 0.2rem
          font-size 0.8rem
        .billtype
          //用div的样式代替select的样式
          /*width: */
          height: 0.8rem
          padding-left 0rem
          border-radius:0.05rem
          //盒子阴影修饰作用,自己随意
          box-shadow: 0 0 0.05rem #ccc
          position: relative
          border none
          select
            //清除select的边框样式
            border: none
            //清除select聚焦时候的边框颜色
            outline: none
            //将select的宽高等于div的宽高
            width: 100%
            height: 0.8rem
            line-height: 0.8rem
            //隐藏select的下拉图标
            appearance: none
            -webkit-appearance: none
            -moz-appearance: none
            //通过padding-left的值让文字居中
            padding-left: 1rem

          //使用伪类给select添加自己想用的图标
          .downicon
            content: ">"
            width: 0.4rem
            height: 0.4rem
            /*background: url("../assets/imgs/set.jpg") no-repeat center*/
            //通过定位将图标放在合适的位置
            position: absolute
            right: 1rem
            top: 40%
            margin-top -0.2rem
            //给自定义的图标实现点击下来功能
            pointer-events: none
        .billsign
          display flex
          flex-wrap wrap
          justify-content  center
          label
            padding 0.1rem
            border 0.02rem solid #999
            margin 0.1rem
            font-size 0.4rem
            text-align center
            border-radius 0.05rem
            width 1rem
            .bankradio
              display: none
            .b-radio
              display: inline-block
              border:0.02rem solid #ccc
              width:0.4rem
              height: 0.4rem
              border-radius:0.04rem
              vertical-align: middle
              position: relative
            .b-radio:before
              content: ''
              font-size: 0
              width: 0.2rem
              height: 0.2rem
              background: rgb(143, 188, 238)
              position: absolute
              left 50%
              top 50%
              margin-left -0.1rem
              margin-top -0.1rem
              border-radius 0.04rem
              display none
            .bankradio:checked+.b-radio:before
              display block
            .signcon
              color #999
              font-size 0.4rem
              margin-top 0.1rem
          .addsign
            border none
            overflow visible
          .addsign>span
            display inline-block
            color red
            width 1rem
            height 1rem
            font-size 0.9rem
      .inputsign
        border 0.02rem dotted #999
        padding 0.2rem

</style>
