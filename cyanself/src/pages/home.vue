<template>
  <div class="home">
    <c-swiper class="myswiper" :datalist="swiperimg"></c-swiper>
    <c-foot :datalist="footdata"></c-foot>
  </div>
</template>

<script>
  import axios from 'axios'
  import cFoot from '@/components/cfoot'
  import cSwiper from '@/components/cswiper'
  export default {
    name: "home",
    components:{
      cFoot,
      cSwiper
    },
    data(){
      return{
        footdata:[],
        swiperimg:[]
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
          }
          }).catch((err)=>{
          console.log(err)
        })
      }
    },
    mounted(){
      this.$store.commit('changeFoot',"home")
      this.getdata()
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .home
    .myswiper
      height 3rem

</style>
