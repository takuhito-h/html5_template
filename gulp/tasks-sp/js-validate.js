/*------------------------------------------------------------------------------------------------

    js-validate

------------------------------------------------------------------------------------------------*/
import gulp from 'gulp';
import jsvalidate from 'gulp-jsvalidate';
import setting from '../setting-sp/js-validate.js';

/*------------------------------------------------------------------
    task
------------------------------------------------------------------*/
gulp.task('jsvalidate:sp', function() {

    return gulp
        .src(setting.src)
        .pipe(jsvalidate())
    ;

});