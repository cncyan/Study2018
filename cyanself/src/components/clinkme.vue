<template>
    <div class="linkcan">
        <!--class="wecode"-->
        <div id="qrcode"></div>
        <div class="wecontent">
            <p><span>微信：</span>{{datalist.selfwechat}}</p>
            <p><span>小程序：</span>{{datalist.selfmini}}</p>
            <p><span>公众号：</span>{{datalist.selfblog}}</p>
        </div>
    </div>
</template>

<script>
    import QRCode from 'qrcodejs2'
    export default {
        props:{
            datalist:Object
        },
        methods:{
            getcode (code) {
//                var code=this.datalist.codeurl
//                console.log(this.datalist.codeurl)
                let qrcode = new QRCode('qrcode', {
                    width: 100,
                    height: 100, // 高度  [图片上传失败...(image-9ad77b-1525851843730)]
                    text: code ,// 二维码内容
                     render: 'canvas' // 设置渲染方式（有两种方式 table和canvas，默认是canvas）
                    // background: '#f0f'
                    // foreground: '#ff0'
                })
            }
        },
//        mounted(){
//            console.log(this.datalist.codeurl)
//            this.getcode(this.datalist.codeurl)
//        },
        updated(){
            console.log(this.datalist.codeurl)
            this.getcode(this.datalist.codeurl)
        }
    }
</script>

<style lang="stylus" scoped>
    @import "../assets/style/common.styl"
    .linkcan
        width 90%
        padding 0.4rem
        display flex
        background-size cover
        border 1px solid $combg
        border-radius 0.2rem
       .wecode
           width 30%
           height auto
           padding-bottom 30%
           background-size cover
           box-sizing border-box
       .wecontent
           margin-left 0.4rem
           margin-top 0.4rem
           p
               font-size 16px
               line-height 0.7rem
               elli(1)
               span
                    font-weight 550

</style>
