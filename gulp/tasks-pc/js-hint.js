 /*------------------------------------------------------------------------------------------------

    js-hint

------------------------------------------------------------------------------------------------*/
var gulp   = require('gulp');
var jshint = require('gulp-jshint');
var config = require('../config-pc').js_hint;

/*------------------------------------------------------------------
    task
------------------------------------------------------------------*/
gulp.task('jshint:pc', function() {

    return gulp
        .src(config.src)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
    ;

});