// pages/classic/classic.js
import {ClassicModel} from '../../model/classic.js'
import {LikeModel} from '../../model/like.js'
var classic = new ClassicModel()
var like = new LikeModel()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    classic: {
      "content": "这个夏天又是一个毕业季",
      "fav_nums": 9,
      "id": 2,
      "image": "https://avatar.csdn.net/8/9/6/1_gq_cyan.jpg?1539058095",
      "index": 2,
      "like_status": 0,
      "pubdate": "2018-06-22",
      "title": "未名未央未知无限",
      "type": 300,
      "music":"http://oo.oeecc.com/data/2018/09/29/1538234924.mp3"
    },
    first:false,
    lasted:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //模板字符串
    console.log(`${this.test()}456`)
    classic.getLasted((res)=>{
      if(res.data){
        this.setData({
          classic: res
        })
      }
    })
  },
  test:function(){
    return 123
  },

  // 自定义事件响应like组件
  onlike:function(event){
    like.like(event.detail.behavier,this.data.classic.id,this.data.type)
  },

  //自定义响应事件nav组件
  onPre:function(){
    this._updateclassic('previous')
  },
  onNext: function () {
    this._updateclassic('next')    
  },
  _updateclassic:function(nextorpre){
    let index = this.data.classic.index
    classic.getClassic(index, nextorpre, (res) => {
      this.setData({
        classic: res,
        first: classic.isFirst(res.index),
        lasted: classic.isLasted(res.index)
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})