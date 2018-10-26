<template>
    <div class="myinfo">
        <div class="myicon" :style="{backgroundImage:'url('+datalist.myicon+')'}"></div>
        <ul class="baseinfo">
            <li><span>姓名：</span>{{datalist.myname}}</li>
            <li><span>电话：</span>{{datalist.myphone}}</li>
            <li><span>出生年月：</span>{{datalist.mybirth}}</li>
            <li><span>学校：</span>{{datalist.myschool}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        props:{
            datalist:Object
        }
    }
</script>

<style lang="stylus" scoped>
    .myinfo
      width 100%
      height auto
      display flex
      justify-content space-around
      padding-top 0.1rem
      .myicon
        width 25%
        height 0
        padding-bottom 25%
        border-radius 50%
        box-sizing border-box
        border 1px solid #ddd
        background-size cover
        margin-top 0.2rem
      .baseinfo
        width 55%
        padding 0.2rem 0
        li
          font-size 14px
          line-height 0.6rem
</style>
