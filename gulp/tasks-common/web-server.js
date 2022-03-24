/*------------------------------------------------------------------------------------------------

    web-server

------------------------------------------------------------------------------------------------*/
import gulp from 'gulp';
import webserver from 'gulp-connect-php';
import setting from '../setting-common/web-server.js';

/*------------------------------------------------------------------
    task
------------------------------------------------------------------*/
gulp.task('webserver', gulp.parallel((done) => {
    webserver.server(setting.setting);

    done();
}, 'bs-init'));
