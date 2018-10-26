// components/picture/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    picdatas:Array,
    perdata:Object
  },

  /**
   * 组件的初始数据
   */
  data: {
    indicatorDots: false,
    autoplay: true,
    interval: 1000,
    duration: 1000,
    showswiper:false,
    showcade:false,
    //画图
    text_x: 100, //x轴
    text_y: 100, //y轴
    showst: false, //是否完成图片和文字的填入
  },

  /**
   * 组件的方法列表
   */
  methods: {
    InputFuns() { //文字
      var ctx = wx.createCanvasContext('myCanvas',this)
      ctx.setFontSize(16)
      ctx.fillText("你好，" , this.data.text_x, this.data.text_y)
      ctx.fillText("nihao", this.data.text_x + 16, this.data.text_y + 16)
      ctx.draw(true)
      this.setData({
        showst: true,
        showswiper: false,
        showcade: true
      })
    },
    Okgenerate() { //生成图片方法
      this.setData({
        showst: false
      })
      wx.canvasToTempFilePath({ //生成图片
        x: 0,
        y: 0,
        width: 200,
        height: 310,
        destWidth: 189,
        destHeight: 310,
        quality: 1,
        canvasId: 'myCanvas',
        success: (res) => {
          wx.saveImageToPhotosAlbum({  //保存生成的图片到手机相册里
            filePath: res.tempFilePath,
            success:(res)=> {
              wx.showToast({
                title: '保存成功',
                icon: 'success'
              })
              this.setData({
                showst: true
              })
            }
          })
        },
        fail:(err)=>{
          console.log(err)
        }
      },this)
    },
    //绑定回家
    gohome: function (e) {
      this.triggerEvent('yesgo')
    },
    //绑定不回家
    ngohome: function (e) {
      this.triggerEvent('nogo')
    },
    activepic:function(){
      this.setData({
        showswiper: true
      })
      setTimeout(()=>{
        this.InputFuns()
        this.pageScrollToBottom()
      },3000)
    },
    //滚动到页面底部
    pageScrollToBottom: function () {
      wx.createSelectorQuery().select('.container').boundingClientRect(function (rect) {
        // 使页面滚动到底部
        wx.pageScrollTo({
          scrollTop: rect.bottom
        })
      }).exec()
    }
  },

  
})
