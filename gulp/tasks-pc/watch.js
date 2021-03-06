/*------------------------------------------------------------------------------------------------

    watch

------------------------------------------------------------------------------------------------*/
import gulp from 'gulp';
import setting from '../setting-pc/watch.js';

/*------------------------------------------------------------------
    task
------------------------------------------------------------------*/
gulp.task('watch:pc', function (done) {
    gulp.watch(setting.nunjucks, gulp.series('nunjucks:pc', 'bs-reload'));

    gulp.watch(setting.iconfont, gulp.series('iconfont:pc', 'bs-reload'));

    gulp.watch(setting.css, gulp.series('css:pc', 'bs-reload'));

    gulp.watch(setting.js, gulp.series('webpack:pc', 'bs-reload'));

    done();
});
