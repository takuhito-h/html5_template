/*------------------------------------------------------------------------------------------------

    webpack

------------------------------------------------------------------------------------------------*/
import gulp from 'gulp';
import gutil from 'gulp-util';
import webpack from 'webpack-stream';
import uglify from 'gulp-uglify';
import { webpack as config } from '../config-pc';

const isRelease = gutil.env.release ? gutil.env.release : false;

/*------------------------------------------------------------------
    task
------------------------------------------------------------------*/
gulp.task('webpack:pc', ['jsvalidate:pc'], function () {
    return gulp
        .src('')
        .pipe(webpack(config))
        .pipe(isRelease ? uglify() : gutil.noop())
        .pipe(gulp.dest(''))
    ;
});