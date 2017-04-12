/*------------------------------------------------------------------------------------------------

    css

------------------------------------------------------------------------------------------------*/
import gulp from 'gulp';
import gutil from 'gulp-util';
import sass from 'gulp-sass';
import sassGlob from 'gulp-sass-glob';
import cssnext from 'gulp-cssnext';
import sourcemaps from 'gulp-sourcemaps';

const config = require('../config-pc').css;
const isRelease = gutil.env.release ? gutil.env.release : false;

/*------------------------------------------------------------------
    task
------------------------------------------------------------------*/
gulp.task('css:pc', function() {

    return gulp.src(config.src)
        .pipe(sourcemaps.init())
            .pipe(sassGlob())
            .pipe(sass(config.sass).on('error', sass.logError))
            .pipe(cssnext(config.cssnext))
        .pipe(isRelease ? gutil.noop() : sourcemaps.write('./'))
            .pipe(gulp.dest(config.dest))
    ;

});