// components/nav/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type:String
    },
    first: Boolean,
    lasted: Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {
    leftsrc:"images/triangle@left.png",
    rightsrc: "images/triangle@right.png",
    leftnosrc: "images/triangle.dis@left.png",
    rightnosrc: "images/triangle.dis@right.png",
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLeft:function(){
      if(!this.properties.first){
        this.triggerEvent('left',{},{})
      }
    },
    onRight:function(){
      if(!this.properties.lasted){
        this.triggerEvent('right',{},{})
      }
    }

  }
})
