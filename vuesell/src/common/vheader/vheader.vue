<template>
    <header>
      <div class="cyantop">
        <div class="cyanlogo">
          <!--<img :src="list.avatar"/>-->
          <img src='../../asset/images/logo.png'/>
        </div>
        <div class="cyandesc">
          <h3>{{list.name}}</h3>
          <a href="weixin://profile/gh_34bd692a9835"><i class="iconfont icon-wechat"></i> 微信</a>
          <div class="cyandiscourt">
            <i class="iconfont icon-youhui cyanicon"></i>
            <span>折扣多多，预购从速</span>
            <button v-if="!showyouhui" @click="toggyhui" class="cyandiscourtBtn"><i class="iconfont icon-xiangxia"></i> </button>
            <button v-else @click="toggyhui" class="cyandiscourtBtn"><i class="iconfont icon-xiangshang"></i> </button>
          </div>
        </div>
      </div>
      <ul v-if="showyouhui" class="cyandiscourtCon">
        <li v-for="item in list.supports" :key="item.type">{{item.description}}</li>
      </ul>
      <div class="cyanwarnus">
        <i class="iconfont icon-gonggao"></i>
        <div class="attentiontext">
          <ul class="conul" ref="slidul">
            <li v-for="item in list.attention" :key="item.id">{{item.content}}</li>
          </ul>
        </div>
      </div>

      <!--<img class="shawimg" :src="list.logobg">-->
      <img src="../../asset/images/logobg.png" class="shawimg"/>
      <div class="shaw"></div>
    </header>
</template>

<script>
    export default {
        name: "vheader",
      props:{
          list:{
            type:Object
          }
      },
      data(){
          return {
            showyouhui:false
          }
      },
      methods:{
          toggyhui(){
            this.showyouhui=!this.showyouhui;
          },
          slidwrap(){
            var i=1;
            setInterval(()=>{
              var ulname=this.$refs.slidul;
              var liname=this.$refs.slidul.childNodes;
              var ultop=ulname.offsetTop;
              if(i<liname.length){
                this.$refs.slidul.style.top =-this.$refs.slidul.childNodes[0].offsetHeight*i+"px";
                i++;
              }else{
                this.$refs.slidul.style.top="0";
                i=1
              }
            },2000)
          }
      },
      mounted(){
          setTimeout(()=>{
            this.slidwrap()
          },100)
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "../../asset/stylus/fun.styl";
header
  padding 1rem;
  position relative;
  .cyantop
    width 100%;
    display flex;
    justify-content space-around;
    .cyanlogo
      width 30%;
      height 0;
      padding-bottom 30%;
      overflow hidden
      &>img
        width 100%;
        border-radius 0.5rem;
    .cyandesc
      display flex;
      flex-flow column nowrap;
      justify-content center;
      width 60%;
      &>h3
        font-size 2rem;
        font-weight bold;
        margin-bottom 0.5rem;
        text-align left;
        texteli()
      &>a
        display block
        width 40%
        padding 0.4rem
        font-size 1.6rem
        box-sizing border-box
        color $mainColor
        border-radius 0.2rem
        background-color #fff;
        text-align center
      .cyandiscourt
        display flex
        justify-content space-between
        margin-top 0.4rem
        .cyanicon
          display inline-block;
          font-size 1.8rem;
          height 2rem;
          line-height 2rem;
          color #ff0000;
        &>span
          font-size 1.2rem;
          height 2rem;
          line-height 2rem;
          width 80%;
          font-weight bold;
          color #ffa500;
        .cyandiscourtBtn
          background none
          border-radius 0.4rem
  .cyandiscourtCon
    text-align left;
    font-size 1.4rem;
    background-color rgba(255,255,255,0.2);
    padding 0.4rem;
    margin-bottom 0.5rem;
    overflow hidden
    &>li
      height 1.6rem
      line-height 1.6rem
      list-style-type square
      margin-left 1.4rem
  .cyanwarnus
    width 100%;
    background rgba(7,17,27,0.3);
    height 1.8rem;
    line-height 1.8rem;
    text-align left;
    padding-left 0.4rem;
    .icon-gonggao
      color #ff0000;
      font-size 2rem;
    .attentiontext
      display inline-block
      font-size 1.4rem;
      color #000;
      height 1.6rem;
      line-height 1.8rem;
      overflow hidden;
      position relative;
      width 80%;
      texteli()
      .conul
        height auto;
        position absolute;
        z-index 100;
        top 0;
        left 0;
        &>li
          height:1.8rem;
          line-height 1.8rem;
  .shawimg
    display block;
    position: absolute;
    width 100%;
    height 100%;
    top 0;
    left 0;
    z-index: -100
  .shaw
    display block;
    position: absolute;
    width 100%;
    height 100%;
    top 0;
    left 0;
    z-index: -99
    background rgba(7,17,27,0.2)
</style>
