/*------------------------------------------------------------------------------------------------

    css

------------------------------------------------------------------------------------------------*/
var gulp       = require('gulp');
var gutil      = require('gulp-util');
var sass       = require('gulp-sass');
var cssnext    = require('gulp-cssnext');
var sourcemaps = require('gulp-sourcemaps');
var config     = require('../config-pc').css;

var isRelease = gutil.env.release ? gutil.env.release : false;

/*------------------------------------------------------------------
    task
------------------------------------------------------------------*/
gulp.task('css:pc', function() {

    return gulp.src(config.src)
        .pipe(sourcemaps.init())
            .pipe(sass(config.sass).on('error', sass.logError))
            .pipe(cssnext(config.cssnext))
        .pipe(isRelease ? gutil.noop() : sourcemaps.write('./'))
            .pipe(gulp.dest(config.dest))
    ;

});