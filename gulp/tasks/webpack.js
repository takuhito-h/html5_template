/*------------------------------------------------------------------------------------------------

    webpack

------------------------------------------------------------------------------------------------*/
import { task, dest } from 'gulp';
import webpack from 'webpack';
import webpackStream from 'webpack-stream';
import setting from '../setting/webpack.js';

/*------------------------------------------------------------------
    task
------------------------------------------------------------------*/
task('webpack', (done) => {
    return webpackStream(setting, webpack)
        .pipe(dest("app/js/"))
    ;
});
