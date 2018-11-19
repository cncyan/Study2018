<template>
    <div class="logincon">
        <div class="formcon">
            <div class="formgroup">
                <input class="phone" name="phone" type="text" placeholder="输入您的手机号"/>
            </div>
            <div class="formgroup">
                <input class="pdcode" name="pdcode" type="text" placeholder="验证码"/>
                <button class="getcode">获取验证码</button>
            </div>
            <div class="formbtn">
                <button class="confirmbtn">下一步</button>
            </div>
        </div>
    </div>
</template>

<script>
//    import {infos} from '../assets/js/api'
    export default {
        methods:{
            login:function(){

            }
        }
    }
</script>

<style lang="stylus">
    /*@import "../assets/css/base.styl";*/
    .logincon
        border:1px solid $mainColor
        .formcon
            margin auto
            display flex
            flex-flow column
            padding 1rem
            &>div
                flex 1
                width 100%
                margin 0.2rem auto
            .formgroup
                display flex
            .formgroup>input
                height 0.8rem
                width 100%
                border 0.01rem solid #999
                font-size 0.4rem
                padding-left 0.2rem
            .formgroup>input.pdcode
                width 60%
                margin 0
            .getcode
                height 0.87rem
                width 40%
                border 0.01rem solid $mainColor
                font-size 0.4rem
                background $mainColor
                color #fff
            .formbtn
                display flex
                justify-content space-around
                &>button
                    border 0.01rem solid #999
                    width 2rem
                    height 1rem
                    border-radius 0.2rem
                    font-size 0.4rem

</style>
