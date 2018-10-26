// pages/888/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //视频资源
    src: "http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400",
    //生成工卡时候的滚动图片
    pics:[
      "../../images/ni.jpg",
      "../../images/ni.jpg",
      "../../images/ni.jpg",
      "../../images/ni.jpg"
    ],
    //工卡生成的个人资料
    person:{
      name:"nini",
      workyer:"1234",
      beydays:"1234",
      signs:["丑","美","贱"]
    },
    //展示提交信息框
    showinfo:false
  },

  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.myComponent = this.selectComponent('#myicture')
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
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '自定义转1111发标题',
      path: '/page/888/index?id=123'
    }
  },

  //显示出来提交信息模块
  showmassage: function () {
    this.setData({
      showinfo: true
    })
  },

  //提交信息生成图片页面开始生成图片
  create: function () {
    //  得到后台返回数据


    // 调用自定义组件中的方法，生成工卡过程
    let myComponent = this.myComponent
    myComponent.activepic()  
    this.pageScrollToBottom()
  },
  // 获取容器高度，使页面滚动到容器底部
  pageScrollToBottom: function () {
    wx.createSelectorQuery().select('.container').boundingClientRect(function (rect) {
      wx.pageScrollTo({
        scrollTop: rect.bottom
      })
    }).exec()
  },

  //去不去现场的选择处理
  arrive:function(){
    console.log(111)
  },
  noarrive: function () {
    console.log(222)
  },
})