// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    like:{
      type:Boolean
    },
    count: {
      type:Number
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    yeslike:"images/like.png",
    nolike:"images/like@dis.png"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike:function(){
      let like = this.properties.like
      let count = this.properties.count
      count=like?count-1:count+1
      this.setData({
        count:count,
        like:!like
      })

      //自定义触发事件
      let behavier = this.properties.like
      this.triggerEvent('like',{behavier:behavier},{})
    }
  }
})
