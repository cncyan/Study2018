<template>
    <div class="tican">
        <ul class="time-horizontal">
            <li :class="accnum==index ? 'selected':''" v-for="(item,index) in datalist" :key="index" @click="toggycon($event)" ref="lis">
                <b></b>
                {{item.sign}}
                <p v-show="accnum==index">
                    <span>名称：</span>{{item.name}}<br/>
                    <span>职位：</span>{{item.job}}<br/>
                    <span>时间：</span>{{item.time}}
                </p>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props:{
            datalist:Array
        },
        data(){
            return {
                accnum:0
            }
        },
        methods:{
            toggycon(ev){
                this.accnum=this.$refs.lis.indexOf(ev.currentTarget)
            }
        }
    }
</script>

<style lang="stylus">
    @import "../assets/style/common.styl"
    .tican
        margin-top 2.5rem
        .time-horizontal
            list-style-type none
            border-top 0.026rem solid #707070
            max-width 21.3rem
            padding 0
            margin 0
        .time-horizontal li
            float left
            position relative
            text-align center
            width 30%
            padding-top 0.26rem

        .time-horizontal li b:before
            content ''
            position absolute
            top -0.18rem
            left 47%
            width 0.32rem
            height 0.32rem
            border-radius 0.21rem
            background $combg
        .time-horizontal li.selected b:before
            top -0.26rem
            border 0.052rem solid #4c4c4c
        .time-horizontal li p
            position absolute
            top -2.2rem
            left 20%
            width 240%
            text-align left
            height 2rem
            line-height 0.6rem
            font-size 14px
            span
                font-weight 550
</style>
