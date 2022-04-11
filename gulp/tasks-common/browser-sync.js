/*------------------------------------------------------------------------------------------------

    browser-sync

------------------------------------------------------------------------------------------------*/
import { task } from 'gulp';
import browserSync from 'browser-sync';
import setting from '../setting-common/bs-config.js';

const browserSyncServer = browserSync.create();

/*------------------------------------------------------------------
    task
------------------------------------------------------------------*/
task('bs-init', (done) => {
    browserSyncServer.init(setting);
    done();
});

task('bs-reload', (done) => {
    browserSyncServer.reload();
    done();
});
