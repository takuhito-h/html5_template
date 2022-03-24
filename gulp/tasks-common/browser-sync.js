/*------------------------------------------------------------------------------------------------

    browser-sync

------------------------------------------------------------------------------------------------*/
import gulp from 'gulp';
import browserSync from 'browser-sync';
import setting from '../setting-common/bs-config.js';

const browserSyncServer = browserSync.create();

/*------------------------------------------------------------------
    task
------------------------------------------------------------------*/
gulp.task('bs-init', (done) => {
    browserSyncServer.init(setting);
    done();
});

gulp.task('bs-reload', (done) => {
    browserSyncServer.reload();
    done();
});
