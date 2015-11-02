/*------------------------------------------------------------------------------------------------

    json-mock

------------------------------------------------------------------------------------------------*/
var gulp       = require('gulp');
var jsonserver = require('gulp-json-srv');
var watch      = require('gulp-watch');
var config     = require('../config-sp').json_server;

/*------------------------------------------------------------------
    task
------------------------------------------------------------------*/
gulp.task('json-mock', function() {
    var server = jsonserver.start(config);

    watch('gulp/mock.json', function(){
        server.reload();
    });
});