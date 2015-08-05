/*------------------------------------------------------------------------------------------------

    css

------------------------------------------------------------------------------------------------*/
var gulp         = require('gulp');
var gutil        = require('gulp-util');
var sass         = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps   = require('gulp-sourcemaps');
var config       = require('../config-pc').css;

var isRelease = gutil.env.release ? gutil.env.release : false;

/*------------------------------------------------------------------
    task
------------------------------------------------------------------*/
gulp.task('css:pc', function() {

    return sass(config.src, {
            style : 'compressed',
            sourcemap : isRelease ? false : true
        })
            .on('error', function (err) {
                console.error('Error', err.message);
            })
            .pipe(autoprefixer(config.autoprefixer))
        .pipe(isRelease ? gutil.noop() : sourcemaps.write('./'))
            .pipe(gulp.dest(config.dest))
    ;

});