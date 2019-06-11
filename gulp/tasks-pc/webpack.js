/*------------------------------------------------------------------------------------------------

    webpack

------------------------------------------------------------------------------------------------*/
import gulp from 'gulp';
import gutil from 'gulp-util';
import webpack from 'webpack';
import webpackStream from 'webpack-stream';
import uglify from 'gulp-uglify';
import setting from '../setting-pc/webpack.js';

const isRelease = gutil.env.release ? gutil.env.release : false;

/*------------------------------------------------------------------
    task
------------------------------------------------------------------*/
gulp.task('webpack:pc', function () {
    return gulp
        .src('src/pc/js/*.js')
        .pipe(webpackStream(setting, webpack))
        .pipe(isRelease ? uglify() : gutil.noop())
    ;
});
