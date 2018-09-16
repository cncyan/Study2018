<template>
    <div class="indexmain">
      <vheader :list="datalists.seller"></vheader>
      <div class="tab border-bottom">
        <router-link to="/goods" class="tab-item" active-class="active">商品</router-link>
        <router-link to="/ratings" class="tab-item">新品上架</router-link>
        <router-link to="/sellers" class="tab-item">评论</router-link>
      </div>
      <router-view></router-view>
    </div>
</template>

<script>
    import vheader from "../../common/vheader/vheader"
    export default {
      name: "index",
      components:{
        vheader
      },
      data(){
        return {
          datalists:{
            goods:[],
            ratings:[],
            seller:{}
          }
        }
      },
      methods:{
          init:function(){
            this.$axios.get("static/mock/data.json").then(
              res => {
                if(res.status==200){
                  if(res.data!=""){
                    this.datalists.goods=res.data.goods;
                    this.datalists.ratings=res.data.ratings;
                    this.datalists.seller=res.data.seller;
                  }
                }
              }
            )
          }
      },
      mounted(){
        this.init()
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../asset/stylus/fun.styl"
  .indexmain
    .tab
      display flex
      justify-content space-around
      padding 0.5rem
      .tab-item
        flex 1
        text-align center
        text-decoration none
        color $mainColor
      .active
        color $mainseColor
</style>
