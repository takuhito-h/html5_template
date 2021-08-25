/*------------------------------------------------------------------------------------------------

    css

------------------------------------------------------------------------------------------------*/
import gulp from 'gulp';
import gutil from 'gulp-util';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import sassGlob from 'gulp-sass-glob';
import cssnext from 'gulp-cssnext';
import setting from '../setting-pc/css.js';

const destSourceMaps = gutil.env.release ? false : true;
const sass = gulpSass(dartSass);

/*------------------------------------------------------------------
    task
------------------------------------------------------------------*/
gulp.task('css:pc', function() {

    return gulp.src(setting.src, { sourcemaps: destSourceMaps })
        .pipe(sassGlob())
        .pipe(sass(setting.sass)
            .on('error', sass.logError))
        .pipe(cssnext(setting.cssnext))
        .pipe(gulp.dest(setting.dest, { sourcemaps: './' }))
    ;

});
