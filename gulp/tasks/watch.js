/*------------------------------------------------------------------------------------------------

    watch

------------------------------------------------------------------------------------------------*/
import gulp from 'gulp';
import setting from '../setting/watch.js';

/*------------------------------------------------------------------
    task
------------------------------------------------------------------*/
gulp.task('watch', (done) => {
    gulp.watch(setting.nunjucks, gulp.series('nunjucks', 'bs-reload'));

    gulp.watch(setting.iconfont, gulp.series('iconfont', 'bs-reload'));

    gulp.watch(setting.css, gulp.series('css', 'bs-reload'));

    gulp.watch(setting.js, gulp.series('webpack', 'bs-reload'));

    done();
});
