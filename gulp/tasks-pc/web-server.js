/*------------------------------------------------------------------------------------------------

    web-server

------------------------------------------------------------------------------------------------*/
var gulp      = require('gulp');
var webserver = require('gulp-connect-php');
var open      = require('gulp-open');
var config    = require('../config-pc').web_server;

/*------------------------------------------------------------------
    task
------------------------------------------------------------------*/
gulp.task('webserver', function() {
    webserver.server(config.options);
});

gulp.task('webserver-open', function() {
    gulp.src("app/index.html")
        .pipe(open("", config.open_options))
    ;
});