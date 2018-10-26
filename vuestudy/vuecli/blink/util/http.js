import {config} from '../config.js'
class HTTP{
  request(params){
    let url=config.api_base_url+params.url
    if(params.method){
      params.method='GET'
    }
    wx.request({
      url: url,
      method:params.method,
      data:params.data,
      header:{
        'content-type':'application/json',
        appkey:config.appkey
      },
      success:(res)=>{
        params.success && params.success(res.data)
      },
      fail:(err)=>{
        this._show_error(1)
      }
    })
  }

  _show_error(error_code) {
    if (!error_code) { 
      error_code = 1
    }
    const tip = tips[error_code]
    wx.showToast({
      title: tip ? tip : tips[1],
      icon: 'none',
      duration: 2000
    })
  }
}
export {HTTP}