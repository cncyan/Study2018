const mysql = require("mysql");

function  fn(sql,callback) {


    var conf = mysql.createConnection({
        //数据库的地址
        host:"localhost",
        //数据库的地址
        user:"root",
        //数据库密码（本地的为空，没有密码）
        password:"root",
        //数据库端口
        port:"3306",
        //使用哪个数据库
        database:"text"
    });
// 连接信息保存起来

    // 开始连接
    conf.connect();
// 执行我们的数据库操作
//con.query("数据库语句","传递的值","回调函数");
//查询数据库user里面的信息

    conf.query(sql, (err,result) =>{
        callback(err,result)
    });

//查询数据库user里面id为2的信息
// conf.query("select * from user where id =2", (err,result) =>{
//     console.log("查询数据库user里面id为2的信息")
//     console.log(result);
// });
// //往数据库添加id为3name为小飞age为20的信息
// var sql="insert into user (id,name,age) values (3,小飞,20)";
// conf.query("insert into user (id,name,age) values ('','小飞','20')", (err,result) =>{
//     console.log("增加的信息")
//     console.log(result);
// });
// //删除
// conf.query("delete from user where id=1", (err,result) =>{
//     console.log("删除")
// console.log(result);
// });
//
// //结束
    conf.end();
}
//模块的导入和导出
module.exports = fn;