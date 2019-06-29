/*------------------------------------------------------------------------------------------------

    css

------------------------------------------------------------------------------------------------*/
import gulp from 'gulp';
import gutil from 'gulp-util';
import sass from 'gulp-sass';
import sassGlob from 'gulp-sass-glob';
import cssnext from 'gulp-cssnext';
import setting from '../setting-pc/css.js';

const isRelease = gutil.env.release ? gutil.env.release : false;

/*------------------------------------------------------------------
    task
------------------------------------------------------------------*/
gulp.task('css:pc', function() {

    return gulp.src(setting.src, { sourcemaps: true })
        .pipe(sassGlob())
        .pipe(sass(setting.sass).on('error', sass.logError))
        .pipe(cssnext(setting.cssnext))
        .pipe(gulp.dest(setting.dest, { sourcemaps: './' }))
    ;

});
