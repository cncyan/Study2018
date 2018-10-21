import {config} from '../config.js'
class HTTP{
  request({url,data={},method='GET'}){
    return new Promise((resolve,reject)=>{
      this._request(url, resolve, reject, data, method)
    })
  }
  _request(url,resolve,reject, data = {}, method = 'GET'){
    wx.request({
      url: config.api_base_url + url,
      method:method,
      data:data,
      header:{
        'content-type':'application/json',
        appkey:config.appkey
      },
      success:(res)=>{
        resolve(res.data)
      },
      fail:(err)=>{
        reject()
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