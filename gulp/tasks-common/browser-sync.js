/*------------------------------------------------------------------------------------------------

    browser-sync

------------------------------------------------------------------------------------------------*/
import browserSync from 'browser-sync';
import setting from '../setting-common/bs-config.js';

const browserSyncServer = browserSync.create();

/*------------------------------------------------------------------
    task
------------------------------------------------------------------*/
const bsInit = (done) => {
    browserSyncServer.init(setting);
    done();
};

const bsReload = (done) => {
    browserSyncServer.reload();
    done();
};

export { bsInit, bsReload };
