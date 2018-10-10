// pages/book-detail/bookdetail.js
import {
  BookModel
} from '../../model/book.js'
import {
  LikeModel
} from '../../model/like.js'
const book = new BookModel()
const like = new LikeModel()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    book: {
      "author": [
        "Wolfgang Mauerer"
      ],
      "binding": "平装",
      "category": "算法",
      "id": 6980,
      "image": "https://img1.doubanio.com/lpic/s4368169.jpg",
      "images": {
        "large": "https://img1.doubanio.com/lpic/s4368169.jpg"
      },
      "isbn": "9787115227430",
      "pages": "1038",
      "price": "149.00元",
      "pubdate": "201005",
      "publisher": "人民邮电出版社",
      "subtitle": "全球开源社区集体智慧结晶，领略Linux内核的绝美风光",
      "summary": "众所周知，Linux操作系统的源代码复杂、文档少，对程序员的要求高，要想看懂这些代码并不是一件容易事...",
      "title": "深入Linux内核架构",
      "translator": [
        "郭旭"
      ]
      },
    comments: {
      "comment":
        [
          {
            "content": "i hate6!",
            "nums": 1
          },
          {
            "content": "i cyan!",
            "nums": 3
          },
          {
            "content": "i cyan!",
            "nums": 3
          },
          {
            "content": "i cyan!",
            "nums": 3
          },
          {
            "content": "i cyan!",
            "nums": 3
          }
        ],
      "book_id": 1
    },
    booklike: {
      "fav_nums": 0,
      "id": 1,
      "like_status": 0
    },
    posting: false
  },


  // 自定义函数
  onLike(event) {
    const like_or_cancel = event.detail.behavior
    like.like(like_or_cancel, this.data.book.id, 400)
  },
  onFakePost(event){
    this.setData({
      posting:true
    })
  },
  onCancel(event){
    this.setData({
      posting:false
    })
  },
  onPost(event){
    const comment = event.detail.text || event.detail.value
    if(comment.length>12){
      wx.showToast({
        title: '评论不得超过12个文字',
        icon:'none'
      })
      return
    }
    book.postComment(this.data.book.id,comment)
      .then(res => {
        wx.showToast({
          title: '+ 1',
          icon: "none"
        })

        this.data.comments.comment.unshift({
          content: comment,
          nums: 1
        })

        this.setData({
          comments: this.data.comments,
          posting: false
        })
      })

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