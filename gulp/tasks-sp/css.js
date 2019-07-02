/*------------------------------------------------------------------------------------------------

    css

------------------------------------------------------------------------------------------------*/
import gulp from 'gulp';
import gutil from 'gulp-util';
import sass from 'gulp-sass';
import sassGlob from 'gulp-sass-glob';
import cssnext from 'gulp-cssnext';
import setting from '../setting-sp/css.js';

const destSourceMaps = gutil.env.release ? false : true;

/*------------------------------------------------------------------
    task
------------------------------------------------------------------*/
gulp.task('css:sp', function() {

    return gulp.src(setting.src, { sourcemaps: destSourceMaps })
        .pipe(sassGlob())
        .pipe(sass(setting.sass)
            .on('error', sass.logError))
        .pipe(cssnext(setting.cssnext))
        .pipe(gulp.dest(setting.dest, { sourcemaps: './' }))
    ;

});