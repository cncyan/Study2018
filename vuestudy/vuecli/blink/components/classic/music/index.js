// components/classic/music/index.js
import { classBeh } from '../classic-beh.js'
const mmgr = wx.getBackgroundAudioManager()
Component({
  /**
   * 组件的属性列表
   */
  behaviors: [classBeh],
  properties: {
    src:String
  },

  /**
   * 组件的初始数据
   */
  data: {
    playing:false,
    pauseSrc: 'images/player@pause.png',
    playSrc: 'images/player@play.png',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onplay:function(){
      //切换图片
      if(!this.data.playing){
        this.setData({
          playing: true
        })
        mmgr.src = this.properties.src
      }else{
        this.setData({
          playing:false
        })
        mmgr.pause()
      }
    }
  }
})
