/*------------------------------------------------------------------------------------------------

    webpack

------------------------------------------------------------------------------------------------*/
import gulp from 'gulp';
import webpack from 'webpack';
import webpackStream from 'webpack-stream';
import setting from '../setting-sp/webpack.js';

/*------------------------------------------------------------------
    task
------------------------------------------------------------------*/
gulp.task('webpack:sp', function () {
    return webpackStream(setting, webpack)
        .pipe(gulp.dest("app-sp/js/"))
    ;
});
