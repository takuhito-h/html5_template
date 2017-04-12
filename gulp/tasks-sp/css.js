/*------------------------------------------------------------------------------------------------

    css

------------------------------------------------------------------------------------------------*/
var gulp       = require('gulp');
var gutil      = require('gulp-util');
var sass       = require('gulp-sass');
var sassGlob   = require("gulp-sass-glob");
var cssnext    = require('gulp-cssnext');
var sourcemaps = require('gulp-sourcemaps');
var config     = require('../config-sp').css;

var isRelease = gutil.env.release ? gutil.env.release : false;

/*------------------------------------------------------------------
    task
------------------------------------------------------------------*/
gulp.task('css:sp', function() {

    return gulp.src(config.src)
        .pipe(sourcemaps.init())
            .pipe(sassGlob())
            .pipe(sass(config.sass).on('error', sass.logError))
            .pipe(cssnext(config.cssnext))
        .pipe(isRelease ? gutil.noop() : sourcemaps.write('./'))
            .pipe(gulp.dest(config.dest))
    ;

});