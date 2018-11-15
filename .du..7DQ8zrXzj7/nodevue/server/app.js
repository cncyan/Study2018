// 快速搭建网站后台的模块
const express = require("express"),
    app = express();

const bodyParser = require("body-parser");
const sql = require('./mysql');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use("*",(req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
next()
})
app.get('/test',(req,res)=>{
    sql("select * from user",(err,result)=>{
    console.log(err)
    console.log(result)
    res.send(result)
})
})
app.post('/abc', (req,res)=>{
    console.log(req.body)
const id = req.body['id'],
    name = req.body['name'];
sql(`insert into user (id,name) values ('${id}','${name}')`,(err,result)=>{
    if(err){
        res.send({code:0})
    }  else{
        res.send({code:1})
}
})
})

app.listen(8899,function () {

    var host = this.address().address
    var port = this.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})//端口号
