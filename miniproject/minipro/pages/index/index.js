//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    goods: [
      {
        id:1,
        goodimg: "../../images/goods/apple.jpg",
        goodname: "茭白三丝茭白三丝茭白三丝",
        goodprice: "12元/500g"
      },
      {
        id: 2,
        goodimg: "../../images/goods/apple.jpg",
        goodname: "茭白三丝",
        goodprice: "12元/500g"
      },
      {
        id: 3,
        goodimg: "../../images/goods/apple.jpg",
        goodname: "茭白三丝",
        goodprice: "12元/500g"
      },
      {
        id: 4,
        goodimg: "../../images/goods/apple.jpg",
        goodname: "茭白三丝",
        goodprice: "12元/500g"
      },
      {
        id: 5,
        goodimg: "../../images/goods/apple.jpg",
        goodname: "茭白三丝",
        goodprice: "12元/500g"
      },
      {
        id: 6,
        goodimg: "../../images/goods/apple.jpg",
        goodname: "茭白三丝",
        goodprice: "12元/500g"
      },
      {
        id: 7,
        goodimg: "../../images/goods/apple.jpg",
        goodname: "茭白三丝",
        goodprice: "12元/500g"
      }
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    // if (app.globalData.userInfo) {
    //   this.setData({
    //     userInfo: app.globalData.userInfo,
    //     hasUserInfo: true
    //   })
    // } else if (this.data.canIUse){
    //   // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //   // 所以此处加入 callback 以防止这种情况
    //   app.userInfoReadyCallback = res => {
    //     this.setData({
    //       userInfo: res.userInfo,
    //       hasUserInfo: true
    //     })
    //   }
    // } else {
    //   // 在没有 open-type=getUserInfo 版本的兼容处理
    //   wx.getUserInfo({
    //     success: res => {
    //       app.globalData.userInfo = res.userInfo
    //       this.setData({
    //         userInfo: res.userInfo,
    //         hasUserInfo: true
    //       })
    //     }
    //   })
    // }
  },
  detail:function(e){
    var goodid=e.currentTarget.dataset.id;
    wx.navigateTo({
      url:'../goodsdetail/index?id='+goodid
    })
  },
  searchgood:function(){
    // wx:wx.request({
    //   url: '',
    //   data: '',
    //   header: {},
    //   method: 'GET',
    //   dataType: 'json',
    //   responseType: 'text',
    //   success: function (res) {
    //     var _that = this;
    //     this.setData({
    //       goods=res.data;
    //     })
    //   },
    //   fail: function(res) {},
    //   complete: function(res) {},
    // })
  }
})
