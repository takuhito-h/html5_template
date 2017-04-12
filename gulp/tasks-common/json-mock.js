/*------------------------------------------------------------------------------------------------

    json-mock

------------------------------------------------------------------------------------------------*/
import gulp from 'gulp';
import jsonserver from 'gulp-json-srv';
import watch from 'gulp-watch';

const config = require('../config-common').json_server;

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