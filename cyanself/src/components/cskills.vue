<template>
    <ul class="skillcan">
      <li v-for="item in datalist">{{item.content}}</li>
    </ul>
</template>

<script>
    export default {
      name: "cskills",
      props:{
        datalist:Array
      }

    }
</script>

<style lang="stylus" scoped>
  .skillcan
    width 100%
    overflow hidden
    li
      font-size 16px
      line-height 0.7rem
      list-style-type square
      margin-left 1rem
      word-break break-all
      padding-right 0.5rem
</style>
