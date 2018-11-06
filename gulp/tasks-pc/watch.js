/*------------------------------------------------------------------------------------------------

    watch

------------------------------------------------------------------------------------------------*/
import gulp from 'gulp';
import watch from 'gulp-watch';
import setting from '../setting-pc/watch.js';

/*------------------------------------------------------------------
    task
------------------------------------------------------------------*/
gulp.task('watch:pc', function () {
    watch(setting.nunjucks, function(){
        gulp.start(['nunjucks:pc']);
    });

    watch(setting.iconfont, function(){
        gulp.start(['iconfont:pc']);
    });

    watch(setting.css, function(){
        gulp.start(['css:pc']);
    });

    watch(setting.js, function(){
        gulp.start(['webpack:pc']);
    });
});
