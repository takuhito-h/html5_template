/*------------------------------------------------------------------------------------------------

    js-validate

------------------------------------------------------------------------------------------------*/
import gulp from 'gulp';
import jsvalidate from 'gulp-jsvalidate';

const config = require('../config-pc').js_validate;

/*------------------------------------------------------------------
    task
------------------------------------------------------------------*/
gulp.task('jsvalidate:pc', function() {

    return gulp
        .src(config.src)
        .pipe(jsvalidate())
    ;

});