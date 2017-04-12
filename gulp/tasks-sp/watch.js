/*------------------------------------------------------------------------------------------------

    watch

------------------------------------------------------------------------------------------------*/
import gulp from 'gulp';
import watch from 'gulp-watch';

const config = require('../config-sp').watch;

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
        gulp.start(['build-css:sp']);
    });

    watch(config.js, function(){
        gulp.start(['build-js:sp']);
    });
});