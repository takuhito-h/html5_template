/*------------------------------------------------------------------------------------------------

    watch

------------------------------------------------------------------------------------------------*/
import gulp from 'gulp';
import setting from '../setting-sp/watch.js';

/*------------------------------------------------------------------
    task
------------------------------------------------------------------*/
gulp.task('watch:sp', function(done){
    gulp.watch(setting.nunjucks, gulp.task('nunjucks:sp'));

    gulp.watch(setting.iconfont, gulp.task('iconfont:sp'));

    gulp.watch(setting.css, gulp.task('css:sp'));

    gulp.watch(setting.js, gulp.task('webpack:sp'));

    done();
});
