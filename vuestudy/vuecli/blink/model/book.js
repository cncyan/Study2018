import { HTTP } from '../util/http-p.js'
class BookModel extends HTTP{
  getbooklist(){
    return this.request({url:'book/hot_list'})
  }


  postComment(bid, comment) {
    return this.request({
      url: 'book/add/short_comment',
      method: 'POST',
      data: {
        book_id: bid,
        content: comment
      }
    })
  }
}
export {BookModel}