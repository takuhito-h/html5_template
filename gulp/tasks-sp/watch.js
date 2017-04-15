/*------------------------------------------------------------------------------------------------

    watch

------------------------------------------------------------------------------------------------*/
import gulp from 'gulp';
import watch from 'gulp-watch';
import { watch as config } from '../config-sp';

/*------------------------------------------------------------------
    task
------------------------------------------------------------------*/
gulp.task('watch:sp', function () {
    watch(config.ect, function(){
        gulp.start(['ect:sp']);
    });

    watch(config.iconfont, function(){
        gulp.start(['iconfont:sp']);
    });

    watch(config.css, function(){
        gulp.start(['css:sp']);
    });

    watch(config.js, function(){
        gulp.start(['webpack:sp']);
    });
});