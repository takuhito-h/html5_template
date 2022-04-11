/*------------------------------------------------------------------------------------------------

    web-server

------------------------------------------------------------------------------------------------*/
import { task, parallel } from 'gulp';
import gulp from 'gulp';
import webserver from 'gulp-connect-php';
import setting from '../setting-common/web-server.js';

/*------------------------------------------------------------------
    task
------------------------------------------------------------------*/
task('webserver', parallel((done) => {
    webserver.server(setting.setting);

    done();
}, 'bs-init'));
