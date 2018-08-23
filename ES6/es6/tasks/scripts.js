import gulp from 'gulp';
import gulpif from 'gulp-if';
import concat from 'gulp-concat';
import webpack from 'webpack';
import gulpWebpack from 'webpack-stream';
import named from 'vinyl-named';                 //文件重命名坐标志的包
import livereload from 'gulp-livereload';        //文件修改的热更新包
import plumber from 'gulp-plumber';             //处理文件信息流
import rename from 'gulp-rename';               //对文件重命名
import uglify from 'gulp-uglify';               //js压缩的包
import {log,colors} from 'gulp-util';           //文件输出
import args from './util/args';                 //对命令行参数进行解析

//task创建一个脚本编译的任务scripts,函数为任务要做什么
gulp.task('scripts',()=>{
    //src打开一个文件
    //pipe plumber处理抛出的错误
    //gulpWebpack(处理module,null,错误处理)
    //dest（路径）编译后文件放在那里，放在server，服务使用编译后的文件
    //rename重命名编译文件
    //uglify压缩文件cp.min.js，压缩后重新放置保存
    //判断并进行热更新livereload
    return gulp.src(['app/js/index.js'])
        .pipe(plumber({
            errorHandle:function(){

            }
        }))
        .pipe(named())
        .pipe(gulpWebpack({
            module:{
                loaders:[{
                    test:/\.js$/,
                    loader:'babel'
                }]
            }
        }),null,(err,stats)=>{
            log(`Finished '${colors.cyan('scripts')}'`,stats.toString({
                chunks:false
            }))
        })
        .pipe(gulp.dest('server/public/js'))
        .pipe(rename({
            basename:'cp',
            extname:'.min.js'
        }))
        .pipe(uglify({compress:{properties:false},output:{'quote_keys':true}}))
        .pipe(gulp.dest('server/public/js'))
        .pipe(gulpif(args.watch,livereload()))
})
