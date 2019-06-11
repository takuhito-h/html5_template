/*------------------------------------------------------------------------------------------------

    webpack

------------------------------------------------------------------------------------------------*/
import gulp from 'gulp';
import gutil from 'gulp-util';
import webpack from 'webpack';
import webpackStream from 'webpack-stream';
import uglify from 'gulp-uglify';
import setting from '../setting-sp/webpack.js';

const isRelease = gutil.env.release ? gutil.env.release : false;

/*------------------------------------------------------------------
    task
------------------------------------------------------------------*/
gulp.task('webpack:sp', function () {
    return gulp
        .src('src/sp/js/application.js')
        .pipe(webpackStream(setting, webpack))
        .pipe(isRelease ? uglify() : gutil.noop())
    ;
});
