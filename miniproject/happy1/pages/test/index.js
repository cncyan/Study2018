const app = getApp()
// const ctx = wx.createCanvasContext('myCanvas')
Page({
  data: {
    text_x: 20, //x轴
    text_y: 20, //y轴
    imageUrl: '',  // 生成的图片路径
    showst: false, //是否完成图片和文字的填入
    sytext: '', //文本
  },
  chooseImageFun() { //选择图片
    var _this = this
    wx.chooseImage({
      success: function (res) {
        console.log(res)
        _this.setData({
          imageUrl: res.tempFilePaths[0]
        })
        ctx.drawImage(res.tempFilePaths[0], 6, 0, 189, 310)
        ctx.draw()
      }
    })
  },
  InputFuns() { //文字

    var ctx = wx.createCanvasContext('myCanvas')
    // this.setData({
    //   sytext: e.detail.value
    // })
    ctx.setFontSize(14)
    // ctx.fillText(this.data.sytext, this.data.text_x, this.data.text_y)
    ctx.fillText("你好，"+this.data.sytext, this.data.text_x, this.data.text_y)
    ctx.fillText("nihao" + this.data.sytext, this.data.text_x+16, this.data.text_y+16)
    console.log(ctx)
    ctx.draw(true)
    this.setData({
      showst: true
    })
  },
  Okgenerate() { //生成图片方法
    var _this = this
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
      success: function (res) {
        wx.saveImageToPhotosAlbum({  //保存生成的图片到手机相册里
          filePath: res.tempFilePath,
          success(res) {
            app.showToasts('保存成功')
            _this.setData({
              showst: true
            })
          }
        })
      }
    })
  },
  onLoad(){
    this.InputFuns()
  }
})