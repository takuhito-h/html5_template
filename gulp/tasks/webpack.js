/*------------------------------------------------------------------------------------------------

    webpack

------------------------------------------------------------------------------------------------*/
import gulp from 'gulp';
import webpack from 'webpack';
import webpackStream from 'webpack-stream';
import setting from '../setting/webpack.js';

/*------------------------------------------------------------------
    task
------------------------------------------------------------------*/
gulp.task('webpack', (done) => {
    return webpackStream(setting, webpack)
        .pipe(gulp.dest("app/js/"))
    ;
});
