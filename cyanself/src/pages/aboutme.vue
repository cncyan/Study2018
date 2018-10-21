<template>
    <div class="aboutme">
      <c-foot :datalist="footdata"></c-foot>
    </div>
</template>

<script>
  import cFoot from '@/components/cfoot'
  import axios from 'axios'
  export default {
    name: "home",
    components:{
      cFoot
    },
    data(){
      return{
        footdata:[]
      }
    },
    methods:{
      getdata(){
        axios.get('/static/homedata.json').then((res)=>{
          if(res.data){
            this.footdata=res.data.data.footicon
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

<style scoped>

</style>
