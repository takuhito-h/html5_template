/*------------------------------------------------------------------------------------------------

    watch

------------------------------------------------------------------------------------------------*/
import gulp from 'gulp';
import setting from '../setting-pc/watch.js';

/*------------------------------------------------------------------
    task
------------------------------------------------------------------*/
gulp.task('watch:pc', function(done){
    gulp.watch(setting.nunjucks, gulp.task('nunjucks:pc'));

    gulp.watch(setting.iconfont, gulp.task('iconfont:pc'));

    gulp.watch(setting.css, gulp.task('css:pc'));

    gulp.watch(setting.js, gulp.task('webpack:pc'));

    done();
});
