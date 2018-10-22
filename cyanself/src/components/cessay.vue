<template>
<div class="escan">
    <div class="essay" v-for="item in datalist" :key="item.id">
        <div class="esicon" :style="{backgroundImage: 'url('+item.imgurl+')'}"></div>
        <div class="estext">
            <h3>{{item.title}}</h3>
            <p>{{item.content}}</p>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        props:{
            datalist:Array
        }
    }
</script>

<style lang="stylus" scoped>
    @import "../assets/style/common.styl";
    .escan
      width 98%
      height auto
      overflow hidden
    .essay
      width 98%
      box-sizing border-box
      padding 0.4rem
      margin 0.2rem 0
      float left
      border 1px solid #ddd
      display flex
      justify-content space-around
      .esicon
        width 28%
        height 0
        padding-bottom 28%
      .estext
        width 60%
        h3
          font-size 20px
          margin 0.2rem 0
          overflow hidden
          text-overflow ellipsis
          width 85%
        p
          width 85%
          word-wrap break-word
          font-size 16px
          line-height 0.6rem
          overflow hidden
          text-overflow ellipsis
          display -webkit-box
          -webkit-box-orient vertical
          -webkit-line-clamp 3
</style>
