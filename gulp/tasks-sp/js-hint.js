/*------------------------------------------------------------------------------------------------

    js-hint

------------------------------------------------------------------------------------------------*/
import gulp from 'gulp';
import jshint from 'gulp-jshint';

const config = require('../config-sp').js_hint;

/*------------------------------------------------------------------
    task
------------------------------------------------------------------*/
gulp.task('jshint:sp', function() {

    return gulp
        .src(config.src)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
    ;

});