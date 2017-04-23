/*------------------------------------------------------------------------------------------------

    js-validate

------------------------------------------------------------------------------------------------*/
import gulp from 'gulp';
import jsvalidate from 'gulp-jsvalidate';
import setting from '../setting-pc/js-hint.js';

/*------------------------------------------------------------------
    task
------------------------------------------------------------------*/
gulp.task('jsvalidate:pc', function() {

    return gulp
        .src(setting.src)
        .pipe(jsvalidate())
    ;

});