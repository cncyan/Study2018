import {HTTP} from '../util/http.js'
class LikeModel extends HTTP{
  like(behavier,artid,arttype){
    let url=behavier?'like':'like/cancel'
    this.request({
      url:url,
      method:'POST',
      data:{
        art_id: artid,
        type: arttype
      }
    })
  }
}
export {LikeModel}