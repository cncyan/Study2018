<template>
    <div class="billfoot">
    <ul class="menu">
        <li><router-link :class="actwords=='home' ? 'active':''" to="/">明细</router-link></li>
        <li><router-link :class="actwords=='aboutme' ? 'active':''" to="/aboutme">我的</router-link></li>
    </ul>
    </div>
</template>

<script>
    export default {
        name: "billfoot",
        props:{
            actwords:String
        }
    }
</script>

<style lang="stylus" scoped>
    .billfoot
        width 100%
        position fixed
        bottom 0
        text-align center
        height 1.2rem
        line-height 1.2rem
        border-top 0.02rem solid #999
        background #fff
        .menu
            width 100%
            display flex
            &>li
                flex 1
                .active
                    color $mainColor
</style>
