<template>
    <div class="likecan">
        <div class="liimg" :style="{backgroundImage: 'url('+datalist.iconurl+')'}"></div>
        <p>{{datalist.content}}</p>
    </div>
</template>

<script>
    export default {
        props:{
            datalist:Object
        }
    }
</script>

<style lang="stylus" scoped>
    @import "../assets/style/common.styl";
    /*这里需要超过两行省略*/
    .likecan
        padding 0.5rem
        width 100%
        display flex
        .liimg
            width 40%
            height auto
            padding-bottom 30%
            background-size cover
        p
            padding-left 0.2rem
            font-size 14px
            line-height 0.6rem
            elli(2)
</style>
