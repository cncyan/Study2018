<template>
    <div class="aboutme">
        <div class="metop">
            <div class="mebg"></div>
            <div class="hoset">
                <router-link to="/set" class="iconfont icon-icon-test setimg"></router-link>
            </div>
            <div class="info">
                <img class="myicon" src="../assets/imgs/usericon.png"/>
                <span class="mynickname">cyancyan</span>
            </div>
        </div>
        <div class="memenu">
            <div class="meitem" @click="showali">
                <div style="color:#56abe4" class="iconfont icon-alipay"></div>
                <span>我的支付宝</span>
            </div>
            <div class="meitem" @click="showwe">
                <div style="color:#00cd0c" class="iconfont icon-wechat"></div>
                <span>我的微信</span>
            </div>
            <div class="meitem">
                <div class="iconfont icon-wechat"></div>
                <span>我的微信</span>
            </div>
        </div>
        <billfoot :actwords="current"></billfoot>

        <div v-if="isshadow" class="shadow" @click="clearshadow"></div>
        <div>

        </div>
    </div>
</template>

<script>
    import billfoot from '../components/billfoot.vue'
    export default {
        components:{
            billfoot
        },
        data(){
            return {
                current:"aboutme",
                // addbill 弹出层
                isshadow:false,
                isalipay:false,
                iswepay:false
            }
        },
        methods:{
            clearshadow:function(){
                this.isshadow=false
                this.isalipay=false
                this.iswepay=false
            },
            showali:function(){
                this.isshadow=true
                this.isalipay=true
            },
            showwe:function(){
                this.isshadow=true
                this.iswepay=true
            }
        }
    }
</script>

<style lang="stylus" scoped>
.metop
    border-bottom 0.02rem solid $mainColor
    box-sizing border-box
    position relative
    .mebg
        background url("../assets/imgs/billuserbg.png")
        opacity 0.3
        width 100%
        height 100%
        position absolute
        background-size cover
    .hoset
       width 100%
       height 0.8rem
       position relative
       .setimg
           width 0.6rem
           height 0.6rem
           position absolute
           right 0.2rem
           top 0.2rem
           font-size 0.6rem
           text-decoration none
    .info
        width 100%
        text-align center
        height 3rem
        .myicon
            width 1.8rem
            height 1.8rem
            border-radius 50%
            border 0.02rem dotted $mainColor
            display block
            margin auto
        .mynickname
            font-size 0.5rem
            display block
            margin-top 0.2rem
.memenu
    display flex
    width 100%
    padding 1.5rem
    box-sizing border-box
    flex-wrap wrap
    .meitem
        width 35%
        display inline-block
        margin 7.5%
        &>div
            width 80%
            height 1.8rem
            font-size 1.6rem
            text-align center
            display block
            margin auto
        &>span
            display block
            width 100%
            text-align center
            padding-top 0.2rem
            font-size 0.4rem
.shadow
    position absolute
    height 100vh
    width 100%
    background rgba(0,0,0,0.5)
    top 0

</style>
