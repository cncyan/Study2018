import gulp from 'gulp';
import gulpif from 'gulp-if';
import liveserver from 'gulp-live-server';
import args from './util/args';

gulp.task('serve',(cb)=>{
  //非监听状态下返回回调函数
  if(!args.watch) return cb();
  //否则，创建一个服务器，harmony当前命令行下执行后边路径的脚本
  var server = liveserver.new(['--harmony','server/bin/www']);
  //启动服务器
  server.start();

  //为了使服务器监听文件改变浏览器热更新。使用watch(监听路径数组，回调函数)进行监听
  //server.notify.apply作出服务更新
  //此外监听指定脚本文件，server.start.bind(server)()这个进行

  gulp.watch(['server/public/**/*.js','server/views/**/*.ejs'],function(file){
    server.notify.apply(server,[file]);
  })

  gulp.watch(['server/routes/**/*.js','server/app.js'],function(){
    server.start.bind(server)()
  });
})
