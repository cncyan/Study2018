// 快速搭建网站后台的模块
const express = require("express"),
    app = express();

const bodyParser = require("body-parser");
const sql = require('./mysql');
var resu={
    code:2,
    msg:'',
    data:[]
}
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use("*",(req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
next()
})
app.get('/bill/info',(req,res)=>{
    sql("select * from billcon",(err,result)=>{
        if(result!=""){
            resu.code=0
            resu.msg='success'
            resu.data=result
        }else{
            resu.code=-1
            resu.msg='empty'
            resu.data=result
        }
    res.send(resu)
})
})
app.post('/user/login', (req,res)=>{
let nickname = req.body['nickname'],
    phone = req.body['phone'],
    pwd =req.body['password'];
sql('select * from billuser where nickname="'+nickname+'" or phone="'+phone+'"',(err,result)=>{
    if(result!=""){
        if(result[0].password==pwd){
            resu.code=0
            resu.msg="success"
            resu.data=result
        }else{
            resu.code=-1
            resu.msg="wrongpwd"
            resu.data=[]
        }
    }else{
        resu.code=-1
        resu.msg="nouser"
        resu.data=[]
    }
    res.send(resu)
})
//sql(`insert into user (id,name) values ('${id}','${name}')`,(err,result)=>{
//    if(err){
//        res.send({code:0})
//    }  else{
//        res.send({code:1})
//}
})

app.listen(8899,function () {

    var host = this.address().address
    var port = this.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})//端口号
