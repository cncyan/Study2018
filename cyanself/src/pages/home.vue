<template>
  <div class="home">
    <div class="maincan">
      <c-swiper class="myswiper" :datalist="swiperimg"></c-swiper>
      <div class="homecontent">
        <h2 class="h2title">谈谈技术</h2>
        <c-essay :datalist="teessaies"></c-essay>
        <h2 class="h2title">聊聊生活</h2>
        <c-essay :datalist="lifeessaies"></c-essay>
      </div>
      <c-linkme :datalist="selfs"></c-linkme>
    </div>
    <c-foot class="myfoot" :datalist="footdata"></c-foot>
  </div>
</template>

<script>
  import axios from 'axios'
  import cFoot from '@/components/cfoot'
  import cSwiper from '@/components/cswiper'
  import cEssay from '@/components/cessay'
  import cLinkme from '@/components/clinkme'
  export default {
    name: "home",
    components:{
      cFoot,
      cSwiper,
      cEssay,
      cLinkme
    },
    data(){
      return{
        footdata:[],
        swiperimg:[],
        teessaies:[],
        lifeessaies:[],
        selfs:{}
      }
    },
    methods:{
      getdata(){
        axios.get('/static/homedata.json').then((res)=>{
          if(res.data){
            this.footdata=res.data.data.footicon
            for(let i=0;i<res.data.data.swiperimgs.length;i++){
              res.data.data.swiperimgs[i]=require("../assets/images/"+res.data.data.swiperimgs[i])
            }
            this.swiperimg=res.data.data.swiperimgs
            for(let i=0;i<res.data.data.techessay.length;i++){
              res.data.data.techessay[i].imgurl=require("../assets/images/essayicons/"+res.data.data.techessay[i].imgurl)
            }
            this.teessaies=res.data.data.techessay
          console.log(this.teessaies)
            for(let i=0;i<res.data.data.lifeessay.length;i++){
              res.data.data.lifeessay[i].imgurl=require("../assets/images/essayicons/"+res.data.data.lifeessay[i].imgurl)
            }
            this.lifeessaies=res.data.data.lifeessay
          }
          }).catch((err)=>{
          console.log(err)
        })
      }
    },
    mounted(){
      this.selfs=this.$store.state.selfdesc
      this.$store.commit('changeFoot',"home")
      this.getdata()
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../assets/style/common.styl"
  .home
    padding 0.2rem
    .maincan
      padding-bottom 1rem
      overflow-y scroll
      .myswiper
        position absolute
        width 100%
        top 0
        left 0
        height 0
        padding-bottom 50%
      .homecontent
        margin-top 4.8rem
        width 100%
        padding 0.2rem
        .h2title
          font-size 18px
          margin-top 0.5rem
          margin-bottom 0.3rem
    .myfoot
      width 100%
      position fixed
      bottom 0
      left 0
      z-index 1
</style>
