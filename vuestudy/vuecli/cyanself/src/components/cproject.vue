<template>
    <div class="procan">
      <ul>
        <li @click="changenum(index)" v-for="(item,index) in datalist" :key="item.id">{{item.title}}</li>
      </ul>
      <div class="procontent" v-for="(item,index) in datalist" v-show="index==num" :key="item.id">
        <p class="protitle">{{item.title}}</p>
        <p><span>时&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;间: </span>{{item.time}}</p>
        <p><span>简&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;介: </span>{{item.desc}}</p>
        <p><span>工作内容: </span>{{item.myjob}}</p>
      </div>
    </div>
</template>

<script>
    export default {
      name: "project",
      data(){
        return {
          num:0
        }
      },
      props:{
        datalist:Array
      },
      methods:{
        changenum(n){
          this.num=n
        }
      }
    }
</script>

<style lang="stylus" scoped>
  @import "../assets/style/common.styl"
  .procan
    width 100%
    height auto
    overflow hidden
    ul
      width 100%
      height 1rem
      display flex
      li
        flex 1
        text-align center
        line-height 1rem
        border 1px solid #ddd
        elli(1)
    .procontent
      border 1px solid #ddd
      padding 0 0.5rem
      p
        font-size 14px
        line-height 0.7rem
        &.protitle
          font-size 16px
          font-weight 500
          margin-top:0.2rem
        span
          font-weight 600
</style>
