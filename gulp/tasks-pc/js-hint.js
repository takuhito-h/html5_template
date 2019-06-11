 /*------------------------------------------------------------------------------------------------

    js-hint

------------------------------------------------------------------------------------------------*/
import gulp from 'gulp';
import jshint from 'gulp-jshint';
import setting from '../setting-pc/js-hint.js';

/*------------------------------------------------------------------
    task
------------------------------------------------------------------*/
gulp.task('jshint:pc', function() {

    return gulp
        .src(setting.src)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
    ;

});
