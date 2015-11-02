/*------------------------------------------------------------------------------------------------

    json-mock

------------------------------------------------------------------------------------------------*/
var gulp       = require('gulp');
var jsonserver = require('gulp-json-srv');
var watch      = require('gulp-watch');
var config     = require('../config-common').json_server;

/*------------------------------------------------------------------
    task
------------------------------------------------------------------*/
gulp.task('jsonmock', function() {
    var server = jsonserver.start(config.setting);

    watch(config.watch_path, function(){
        server.reload();
    });
});