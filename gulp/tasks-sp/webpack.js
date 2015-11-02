/*------------------------------------------------------------------------------------------------

    webpack

------------------------------------------------------------------------------------------------*/
var gulp    = require('gulp');
var gutil   = require('gulp-util');
var webpack = require('webpack-stream');
var uglify  = require('gulp-uglify');
var config  = require('../config-sp').webpack;

var isRelease = gutil.env.release ? gutil.env.release : false;

/*------------------------------------------------------------------
    task
------------------------------------------------------------------*/
gulp.task('webpack:sp', function () {
    return gulp
        .src('')
        .pipe(webpack(config))
        .pipe(isRelease ? uglify() : gutil.noop())
        .pipe(gulp.dest(''))
    ;
});