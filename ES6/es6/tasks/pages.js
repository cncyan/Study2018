import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';     //热更新
import args from './util/args';

//dest(路径)编译后的文件拷贝到哪里
gulp.task('pages',()=>{
  return gulp.src('app/**/*.ejs')
    .pipe(gulp.dest('server'))
    .pipe(gulpif(args.watch,livereload()))
})
