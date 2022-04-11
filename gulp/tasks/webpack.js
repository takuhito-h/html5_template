/*------------------------------------------------------------------------------------------------

    webpack

------------------------------------------------------------------------------------------------*/
import { dest } from 'gulp';
import webpack from 'webpack';
import webpackStream from 'webpack-stream';
import setting from '../setting/webpack.js';

/*------------------------------------------------------------------
    task
------------------------------------------------------------------*/
const webpackTask = () => {
    return webpackStream(setting, webpack)
        .pipe(dest("app/js/"))
    ;
};

export { webpackTask as webpack };
