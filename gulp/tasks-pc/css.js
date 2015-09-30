/*------------------------------------------------------------------------------------------------

    css

------------------------------------------------------------------------------------------------*/
var gulp         = require('gulp');
var gutil        = require('gulp-util');
var sass         = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps   = require('gulp-sourcemaps');
var config       = require('../config-pc').css;

var isRelease = gutil.env.release ? gutil.env.release : false;

/*------------------------------------------------------------------
    task
------------------------------------------------------------------*/
gulp.task('css:pc', function() {

    return gulp.src(config.src)
        .pipe(sourcemaps.init())
            .pipe(sass({
                outputStyle : 'compressed'
            }).on('error', sass.logError))
            .pipe(autoprefixer(config.autoprefixer))
        .pipe(isRelease ? gutil.noop() : sourcemaps.write('./'))
        .pipe(gulp.dest(config.dest))
    ;

});