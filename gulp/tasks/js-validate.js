/*------------------------------------------------------------------------------------------------

    js-validate

------------------------------------------------------------------------------------------------*/
import gulp from 'gulp';
import jsvalidate from 'gulp-jsvalidate';
import setting from '../setting/js-validate.js';

/*------------------------------------------------------------------
    task
------------------------------------------------------------------*/
gulp.task('jsvalidate', function() {

    return gulp
        .src(setting.src)
        .pipe(jsvalidate())
    ;

});
