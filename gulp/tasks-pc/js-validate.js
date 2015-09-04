/*------------------------------------------------------------------------------------------------

    js-validate

------------------------------------------------------------------------------------------------*/
var gulp       = require('gulp');
var jsvalidate = require('gulp-jsvalidate');
var config     = require('../config-pc').js_validate;

/*------------------------------------------------------------------
    task
------------------------------------------------------------------*/
gulp.task('jsvalidate:pc', function() {

    return gulp
        .src(config.src)
        .pipe(jsvalidate())
    ;

});