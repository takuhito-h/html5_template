/*------------------------------------------------------------------------------------------------

    js-concat

------------------------------------------------------------------------------------------------*/
var gulp       = require('gulp');
var gutil      = require('gulp-util');
var concat     = require('gulp-concat');
var uglify     = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var config     = require('../config-sp').js_concat;

var isRelease = gutil.env.release ? gutil.env.release : false;

/*------------------------------------------------------------------
    task
------------------------------------------------------------------*/
gulp.task('js:sp', function() {

    return gulp
        .src(config.src)
        .pipe(isRelease ? gutil.noop() : sourcemaps.init({
            loadMaps : true
        }))
        .pipe(concat(config.file_name))
        .pipe(isRelease ? uglify() : gutil.noop())
        .pipe(isRelease ? gutil.noop() : sourcemaps.write('./'))
        .pipe(gulp.dest(config.dest))
    ;

});