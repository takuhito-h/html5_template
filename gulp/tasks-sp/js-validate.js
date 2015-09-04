/*------------------------------------------------------------------------------------------------

    js-validate

------------------------------------------------------------------------------------------------*/
var gulp       = require('gulp');
var jsvalidate = require('gulp-jsvalidate');
var config     = require('../config-sp').js_validate;

/*------------------------------------------------------------------
    task
------------------------------------------------------------------*/
gulp.task('jsvalidate:sp', function() {

    return gulp
        .src(config.src)
        .pipe(jsvalidate())
    ;

});