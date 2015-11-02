/*------------------------------------------------------------------------------------------------

    watch

------------------------------------------------------------------------------------------------*/
var gulp   = require('gulp');
var watch  = require('gulp-watch');
var config = require('../config-pc').watch;

/*------------------------------------------------------------------
    task
------------------------------------------------------------------*/
gulp.task('watch:pc', function () {
    watch(config.ect, function(){
        gulp.start(['ect:pc']);
    });

    watch(config.iconfont, function(){
        gulp.start(['iconfont:pc']);
    });

    watch(config.css, function(){
        gulp.start(['build-css:pc']);
    });

    watch(config.js, function(){
        gulp.start(['build-js:pc']);
    });
});