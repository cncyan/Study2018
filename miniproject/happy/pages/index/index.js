//index.js
//获取应用实例
// const app = getApp()

Page({
  data: {
    datas:{
      "boss":[
        {
          "icon": "../../images/ni.jpg",
          "name": "奥利维亚",
          "job": "自由女神",
          "say": "知道你为什么这么穷吗？显然你不知道，来吧，让大佬们给你指点迷津"
        },
        {
          "icon": "../../images/ni.jpg",
          "name": "奥利维亚",
          "job": "自由女神",
          "say": "显然你不知道，来吧，让大佬们给你指点迷津"
        },
        {
          "icon": "../../images/ni.jpg",
          "name": "奥利维亚",
          "job": "自由女神",
          "say": "已经迫不及待了吧，那就，让我们开始吧"
        }
      ],
      "coco": [
        {
          "icon": "../../images/my.png",
          "name": "特洛夫斯基",
          "job": "罗马大汉",
          "say": "哈哈，进来的你是个穷屌丝吧"
        },
        {
          "icon": "../../images/ni.jpg",
          "name": "奥利维亚",
          "job": "自由女神",
          "say": "可别墨迹了吧，赶紧说吧"
        },
        {
          "icon": "../../images/my.png",
          "name": "特洛夫斯基",
          "job": "罗马大汉",
          "say": "哼！因为气质决定行为"
        },
        {
          "icon": "../../images/my.png",
          "name": "特洛夫斯基",
          "job": "罗马大汉",
          "say": "那么见证奇迹的时候到了，来看你为什么这么穷吧"
        },
        {
          "icon": "../../images/my.png",
          "name": "特洛夫斯基",
          "job": "罗马大汉",
          "say": "下面哪朵是你喜欢的花？"
        }
      ],
      "last": [
        {
          "icon": "../../images/my.png",
          "name": "大卫科波菲尔",
          "job": "贼厉害",
          "say": "ok,你已经完成所有回答"
        },
        {
          "icon": "../../images/my.png",
          "name": "大卫科波菲尔",
          "job": "贼厉害",
          "say": "正在计算你的暴富日......"
        },
        {
          "icon": "../../images/ni.jpg",
          "name": "奥利维亚",
          "job": "自由女神",
          "say": "结果出来了，期不期待，想不想知道"
        }
      ]
    },
    listboss: [],
    listcoco: [],
    listlast:[],
    page:0,
    questions:{
      "q1":[
        { name: '1', value: '红花' },
        { name: '2', value: '黄花' },
        { name: '3', value: '绿花' }
      ],
      "q2":[
        { name: '1', value: '红花' },
        { name: '2', value: '黄花' },
        { name: '3', value: '绿花' }
      ],
    },
    showq1:false
  },
  //事件处理函数
 
  onLoad: function () {
    this.setData({
      proop: 0,
      q1op: 0,
      q2op: 0
    })
    this.next(this.data.datas.boss,'listboss')
    this.setData({
      proop: 1
    })
  },
  onReady:function(e){
    this.setData({
      op:1,
      mr:0
    })
  },

  next: function (arr,str) {
    arr.forEach((value, index) => {
      if (index < arr.length) {
        this.data.page = 0;
        //模拟从后台获取到了下一页的数据，附加到原有数组上.concat(value)
        if(str=="listboss"){
          var lists = this.data.listboss.concat(value)
          this.setData({
            listboss: lists, 
            page: this.data.page,
            op: 0,
            mr: -50
          })
        } else if (str == "listcoco") {
         var lists = this.data.listcoco.concat(value)
          this.setData({
            listcoco: lists,
            page: this.data.page,
            op: 0,
            mr: -50
          })
        } else if (str =="listlast"){
          var lists = this.data.listlast.concat(value)
          this.setData({
            listlast: lists,
            page: this.data.page,
            op: 0,
            mr: -50
          })
        }
        this.onReady();
      }
      
    })
  },

  startgame:function(e){
    if (this.data.listcoco.length > 0) { 
      return false
    } else {
      this.next(this.data.datas.coco, 'listcoco')
      this.pageScrollToBottom()
      this.setData({
        q1op: 1
      })
      this.pageScrollToBottom()
    }
  },

  // 获取容器高度，使页面滚动到容器底部
  pageScrollToBottom: function () {
    wx.createSelectorQuery().select('.container').boundingClientRect(function (rect) {
      // 使页面滚动到底部
      wx.pageScrollTo({
        scrollTop: rect.bottom
      })
    }).exec()
  },


  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
    if (this.data.listlast.length > 0) {
      return false
    } else {
      this.next(this.data.datas.last, 'listlast')
      this.pageScrollToBottom()
      this.setData({
        q2op: 1
      })
      this.pageScrollToBottom()
    }
  }
})
