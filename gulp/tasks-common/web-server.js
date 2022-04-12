/*------------------------------------------------------------------------------------------------

    web-server

------------------------------------------------------------------------------------------------*/
import { parallel } from 'gulp';
import { bsInit } from './browser-sync';
import webserver from 'gulp-connect-php';
import setting from '../setting-common/web-server.js';

/*------------------------------------------------------------------
    task
------------------------------------------------------------------*/
const webServerTask = () => {
    parallel((done) => {
        webserver.server(setting.setting);

        done();
    }, bsInit)
};

export { webServerTask as webServer };
