import {HTTP} from '../util/http.js'
class ClassicModel extends HTTP{
  getLasted(sCallback){
    this.request({
      url:'classic/latest',
      success:(res)=>{
        sCallback(res)
        this._setlastindex(res.index)
      }
    })
  }

  getClassic(index,nextorpre,sCallback){
    let key=nextorpre=='next'?this._getkey(index+1):this._getkey(index-1)  //为了实现缓存机制
    let classic=wx.getStorageSync(key)
    if (!classic) {
      this.request({
        url: 'classic/' + index + '/' + nextorpre,
        success: (res) => {
          wx.setStorageSync(this._getkey(res.index),res)
          sCallback(res)
        }
      })
    }else{
      sCallback(classic)
    }
  }
  
  isFirst(index){
    return index==1?true:false
  }
  isLasted(index){
    let lastedindex = this._getlastindex()
    return lastedindex==index?true:false

  }
  
  _setlastindex(index){
    wx.setStorageSync('lasted', index)
  }
  _getlastindex() {
    let index=wx.getStorageSync('lasted')
    return index
  }
  _getkey(index){
    const key='classic-'+index
    return key
  }
}
export {ClassicModel}