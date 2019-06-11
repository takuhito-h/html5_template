/*------------------------------------------------------------------------------------------------

    webpack

------------------------------------------------------------------------------------------------*/
import gulp from 'gulp';
import webpack from 'webpack';
import webpackStream from 'webpack-stream';
import setting from '../setting-pc/webpack.js';

/*------------------------------------------------------------------
    task
------------------------------------------------------------------*/
gulp.task('webpack:pc', function () {
    return webpackStream(setting, webpack)
        .pipe(gulp.dest("app-pc/js/"))
    ;
});
