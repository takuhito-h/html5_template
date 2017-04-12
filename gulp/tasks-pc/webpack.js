/*------------------------------------------------------------------------------------------------

    webpack

------------------------------------------------------------------------------------------------*/
import gulp from 'gulp';
import gutil from 'gulp-util';
import webpack from 'webpack-stream';
import uglify from 'gulp-uglify';

const config  = require('../config-pc').webpack;
const isRelease = gutil.env.release ? gutil.env.release : false;

/*------------------------------------------------------------------
    task
------------------------------------------------------------------*/
gulp.task('webpack:pc', function () {
    return gulp
        .src('')
        .pipe(webpack(config))
        .pipe(isRelease ? uglify() : gutil.noop())
        .pipe(gulp.dest(''))
    ;
});