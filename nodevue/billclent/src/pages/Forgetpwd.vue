<template>
    <div class="logincon">
        <div class="formcon">
            <div class="formgroup">
                <input class="onepwd" name="onepwd" type="text" placeholder="输入密码"/>
            </div>
            <div class="formgroup">
                <input class="repwd" name="repwd" type="text" placeholder="确认密码"/>
            </div>
            <div class="formbtn">
                <button class="confirmbtn">确定</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods:{

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
            .formgroup>input
                height 0.8rem
                width 80%
                margin auto
                border 0.01rem solid #999
                font-size 0.4rem
                padding-left 0.2rem
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
