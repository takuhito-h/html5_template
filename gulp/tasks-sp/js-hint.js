/*------------------------------------------------------------------------------------------------

    js-hint

------------------------------------------------------------------------------------------------*/
var gulp   = require('gulp');
var jshint = require('gulp-jshint');
var config = require('../config-sp').js_hint;

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