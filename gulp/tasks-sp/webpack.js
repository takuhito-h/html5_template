/*------------------------------------------------------------------------------------------------

    webpack

------------------------------------------------------------------------------------------------*/
import gulp from 'gulp';
import gutil from 'gulp-util';
import webpack from 'webpack-stream';
import uglify from 'gulp-uglify';

const config  = require('../config-sp').webpack;
const isRelease = gutil.env.release ? gutil.env.release : false;

/*------------------------------------------------------------------
    task
------------------------------------------------------------------*/
gulp.task('webpack:sp', function () {
    return gulp
        .src('')
        .pipe(webpack(config))
        .pipe(isRelease ? uglify() : gutil.noop())
        .pipe(gulp.dest(''))
    ;
});