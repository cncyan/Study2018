(function(win,doc){
  function myself(opt){
    this.opt=opt;
  }
  /*获取url参数*/
  myself.prototype.geturloptions=function(url){
    if(url=='') return false
    if(url.split("?").length <= 1){

      console.log(url)
      return false
    }else{
      let lasturl=url.split("?")[1].split("&")
      var options={}
      lasturl.forEach(value=>{
        options[value.split("=")[0]]=value.split("=")[1];
      })
      return options
    }
  }
 /*获取当前url路由值*/
  myself.prototype.geturlaccrentpage=function(){
    let hrefnum=win.location.host.length
    return win.location.href.split("//")[1].slice(hrefnum);
  }



  win.me=new myself()
})(window,document)
