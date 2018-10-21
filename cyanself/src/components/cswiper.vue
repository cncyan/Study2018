<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(item,index) in datalist" :key="index">
      <img :src="item" />
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/images/1.jpg"/>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'

  export default {
    components: {
      swiper,
      swiperSlide
    },
    props:{
      datalist:Array
    },
    data(){
      return{
        swiperOption: {
          spaceBetween: 30,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          autoplay:{
            delay: 2500,
            disableOnInteraction: false
          }
        }
      }
    },
    methods:{

    },
    mounted(){

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
</style>
