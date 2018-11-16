<template>
    <div class="billlist">
        <div class="billtitle">
            <h3>收入</h3>
            <span class="titledesc">（2018.09明细）</span>
        </div>
        <ul class="mainbill">
            <li class="billitem">
                <div class="itemtop">
                    <span class="itemmoney">123￥</span>
                    <span class="itemdata">09.11</span>
                    <span class="itemtype">进入支付宝</span>
                    <span class="itemsign">标标签标签标签签</span>
                </div>
                <p class="itemdesc">备注备注备注</p>
            </li>
            <li class="billitem">
                <div class="itemtop">
                    <span class="itemmoney">123￥</span>
                    <span class="itemdata">09.11</span>
                    <span class="itemtype">进入支付宝</span>
                    <span class="itemsign">标标签标签标签签</span>
                </div>
                <p class="itemdesc">备注备注备注</p>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {}
</script>

<style lang="stylus" scoped>
    @import "../assets/css/base.styl";
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
                .itemtop
                    width 100%
                    display flex
                    align-items baseline
                    margin-top 0.2rem
                    .itemmoney
                        font-size 0.6rem
                    .itemdata,.itemtype,.itemsign
                        text-align center
                        border 0.02rem solid #999
                        padding 0.1rem
                        margin 0.1rem
                .itemdesc
                    color #999
                    textell()



</style>
