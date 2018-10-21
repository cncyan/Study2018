<template>
  <div class="foot">
    <ul>
      <li v-for="item in datalist" :key="item.id">
        <router-link :to="item.gourl" :class="acthref==item.gourl ? 'activelink':'noactive'">{{item.foottext}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props:{
    datalist:Array
    // activestate:String
  },
  data () {
    return {
      acthref:""
    }
  },
  methods:{
    actstylehref(){
      this.acthref=me.geturlaccrentpage()
    }
  },
  beforeMount(){
    this.actstylehref()
  },
  mounted(){
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../assets/style/common.styl"
  .foot
    width 100%
    height 1rem
    line-height 1rem
    position fixed
    bottom 0
    ul
      width 100%
      display flex
      justify-content space-around
      color #ddd
      li
        list-style none
        min-width 2rem
        text-align center
        a
          width 100%
          display inline-block
        .activelink
          color $combg
        .noactive
          color #ddd
</style>
