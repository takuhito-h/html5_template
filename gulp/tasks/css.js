/*------------------------------------------------------------------------------------------------

    css

------------------------------------------------------------------------------------------------*/
import { task, src, dest } from 'gulp';
import env from 'dotenv'
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import sassGlob from 'gulp-sass-glob-use-forward';
import cssnext from 'gulp-cssnext';
import setting from '../setting/css.js';

env.config();

const destSourceMaps = process.env.APP_ENV === 'local' ? false : true;
const sass = gulpSass(dartSass);

/*------------------------------------------------------------------
    task
------------------------------------------------------------------*/
task('css', function() {

    return src(setting.src, { sourcemaps: destSourceMaps })
        .pipe(sassGlob())
        .pipe(sass(setting.sass)
            .on('error', sass.logError))
        .pipe(cssnext(setting.cssnext))
        .pipe(dest(setting.dest, { sourcemaps: './' }))
    ;

});
