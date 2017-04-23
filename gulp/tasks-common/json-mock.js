/*------------------------------------------------------------------------------------------------

    json-mock

------------------------------------------------------------------------------------------------*/
import gulp from 'gulp';
import jsonserver from 'gulp-json-srv';
import watch from 'gulp-watch';
import setting from '../setting-common/json-server.js';

/*------------------------------------------------------------------
    task
------------------------------------------------------------------*/
gulp.task('jsonmock', function() {
    const server = jsonserver.create(setting.setting);

    watch(setting.data, function(){
        server.reload();
    });

    return gulp.src(setting.data)
        .pipe(server.pipe());
});