<template>
    <div class="billlist">
        <div class="billtitle">
            <h3>{{billdata.title}}</h3>
            <span class="titledesc">（{{billdata.mday}}）</span>
        </div>
        <ul class="mainbill">
            <li class="billitem" v-for="item in billdata.datalist" :key="item.od">
                <div class="itemtop">
                    <span class="itemmoney">{{item.money}}￥</span>
                    <span class="itemdata">{{item.date}}</span>
                    <span class="itemtype">{{item.come}}</span>
                    <span class="itemsign">{{item.sign}}</span>
                </div>
                <p class="itemdesc">{{item.desc}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props:{
            billdata:Object
        }
    }
</script>

<style lang="stylus" scoped>
    /*@import "../assets/css/base.styl";*/
    .billlist
        width 100%
        padding 0.2rem
        box-sizing border-box
        .billtitle
            width 100%
            display flex
            align-items baseline
            h3
                font-size 0.5rem
                max-width 45%
                margin 0
                textell()
            .titledesc
                font-size 0.3rem
                color #999
                max-width 55%
                textell()
        .mainbill
            list-style none
            padding-inline-start 0
            margin 0
            .billitem
                display inline-block
                padding 0.1 rem
                border 0.02rem solid $mainColor
                margin 0.3rem 0
                width 100%
                box-sizing border-box
                border-radius 0.1rem
                padding-left 0.2rem
                .itemtop
                    width 100%
                    display flex
                    align-items baseline
                    margin-top 0.2rem
                    margin-bottom 0.2rem
                    .itemmoney
                        font-size 0.5rem
                    .itemdata,.itemtype,.itemsign
                        text-align center
                        border 0.02rem solid #999
                        padding 0.1rem
                        margin 0.1rem
                .itemdesc
                    color #999
                    margin-bottom 0.2rem
                    textell()



</style>
