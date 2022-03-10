 /*------------------------------------------------------------------------------------------------

    js-hint

------------------------------------------------------------------------------------------------*/
import gulp from 'gulp';
import jshint from 'gulp-jshint';
import setting from '../setting/js-hint.js';

/*------------------------------------------------------------------
    task
------------------------------------------------------------------*/
gulp.task('jshint', function() {

    return gulp
        .src(setting.src)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
    ;

});
