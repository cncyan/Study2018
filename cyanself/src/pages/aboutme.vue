<template>
    <div class="aboutme">
      <c-myinfo class="myinfo" :datalist="baseinfos"></c-myinfo>
      <hr id="mainhr"/>
      <c-foot class="myfoot" :datalist="footdata"></c-foot>
    </div>
</template>

<script>
  import axios from 'axios'
  import cFoot from '@/components/cfoot'
  import cMyinfo from '@/components/cmyinfo'
  export default {
    name: "home",
    components:{
      cFoot,
      cMyinfo
    },
    data(){
      return{
        footdata:[],
        baseinfos:{}
      }
    },
    methods:{
      getdata(){
        axios.get('/static/resume.json').then((res)=>{
          if(res.data){
            this.footdata=res.data.data.footicon
            res.data.data.mydesc.myicon= require("../assets/images/essayicons/"+res.data.data.mydesc.myicon)
            this.baseinfos=res.data.data.mydesc
          }
        }).catch((err)=>{
          console.log(err)
        })
      }
    },
    mounted(){
      this.$store.commit('changeFoot',"aboutme")
      this.getdata();
    }
  }
</script>

<style lang="stylus" scoped>
  .aboutme
    padding 0.2rem
    #mainhr
      height 0.05rem
      background red
      width 98%
    .myinfo
      width:90%
    .myfoot
      width 100%
      position fixed
      bottom 0
      left 0
      z-index 1
</style>
