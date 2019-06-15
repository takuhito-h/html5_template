/*------------------------------------------------------------------------------------------------

    watch

------------------------------------------------------------------------------------------------*/
import gulp from 'gulp';
import setting from '../setting-sp/watch.js';

/*------------------------------------------------------------------
    task
------------------------------------------------------------------*/
gulp.task('watch:sp', function(done){
    gulp.watch(setting.nunjucks, gulp.series('nunjucks:sp', 'bs-reload'));

    gulp.watch(setting.iconfont, gulp.series('iconfont:sp', 'bs-reload'));

    gulp.watch(setting.css, gulp.series('css:sp', 'bs-reload'));

    gulp.watch(setting.js, gulp.series('webpack:sp', 'bs-reload'));

    done();
});
