// components/vedio/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    data:String
  },

  /**
   * 组件的初始数据
   */
  data: {
    show:true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /*
    *点击自定义视频封面开始播放
    */
    playvedio:function(e){
      let vediocon=wx.createVideoContext("myvedio",this)
      vediocon.play()
      console.log(vediocon)
      this.setData({
        show:false
      })
    },
    /*
    *视频播放完毕重新上封面
    */
    endvedio:function(){
      let vediocon = wx.createVideoContext("myvedio", this)
      // vediocon.play()
      console.log(vediocon)
      this.setData({
        show: true
      })
    },
    /**
     * 当发生错误时触发error事件，event.detail = {errMsg: 'something wrong'}
     */
    videoErrorCallback: function (e) {
      console.log('视频错误信息:')
      console.log(e.detail.errMsg)
    }
  }
})
