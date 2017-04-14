/*------------------------------------------------------------------------------------------------

    json-mock

------------------------------------------------------------------------------------------------*/
import gulp from 'gulp';
import jsonserver from 'gulp-json-srv';
import watch from 'gulp-watch';
import { json_server as config } from '../config-common';

/*------------------------------------------------------------------
    task
------------------------------------------------------------------*/
gulp.task('jsonmock', function() {
    const server = jsonserver.create(config.setting);

    watch(config.data, function(){
        server.reload();
    });

    return gulp.src(config.data)
        .pipe(server.pipe());
});