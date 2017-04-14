/*------------------------------------------------------------------------------------------------

    watch

------------------------------------------------------------------------------------------------*/
import gulp from 'gulp';
import watch from 'gulp-watch';
import { watch as config } from '../config-pc';

/*------------------------------------------------------------------
    task
------------------------------------------------------------------*/
gulp.task('watch:pc', function () {
    watch(config.ect, function(){
        gulp.start(['ect:pc']);
    });

    watch(config.iconfont, function(){
        gulp.start(['iconfont:pc']);
    });

    watch(config.css, function(){
        gulp.start(['build-css:pc']);
    });

    watch(config.js, function(){
        gulp.start(['build-js:pc']);
    });
});