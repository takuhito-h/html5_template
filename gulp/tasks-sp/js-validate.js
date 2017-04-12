/*------------------------------------------------------------------------------------------------

    js-validate

------------------------------------------------------------------------------------------------*/
import gulp from 'gulp';
import jsvalidate from 'gulp-jsvalidate';

const config = require('../config-sp').js_validate;

/*------------------------------------------------------------------
    task
------------------------------------------------------------------*/
gulp.task('jsvalidate:sp', function() {

    return gulp
        .src(config.src)
        .pipe(jsvalidate())
    ;

});