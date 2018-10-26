// pages/book/book.js
import {BookModel} from '../../model/book.js'
var book =new BookModel
Page({

  /**
   * 页面的初始数据
   */
  data: {
    books: [
      {
        "author": "陈儒",
        "fav_nums": 0,
        "id": 18,
        "image": "https://img3.doubanio.com/lpic/s3435132.jpg",
        "like_status": 0,
        "title": "Python源码剖析"
      },
      {
        "author": "MarkPilgrim",
        "fav_nums": 0,
        "id": 58,
        "image": "https://img3.doubanio.com/lpic/s29631790.jpg",
        "like_status": 0,
        "title": "Dive Into Python"
      },
      {
        "author": "MarkPilgrim",
        "fav_nums": 0,
        "id": 65,
        "image": "https://img3.doubanio.com/lpic/s4059293.jpg",
        "like_status": 0,
        "title": "Dive Into Python 3"
      },
    ],
    searching: false,
  },

  //自定义函数
  onSearching:function(event){
    this.setData({
      searching:true
    })
  },
  onCancel:function(event){
    this.setData({
      searching:false
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let booklist = book.getbooklist()
    booklist.then(
      (res)=>{
        console.log(res)
      }
    )
    

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