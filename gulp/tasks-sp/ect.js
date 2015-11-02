/*------------------------------------------------------------------------------------------------

    ect

------------------------------------------------------------------------------------------------*/
var gulp     = require('gulp');
var ect      = require('gulp-ect');
var prettify = require('gulp-prettify');
var config   = require('../config-sp').ect;

/*------------------------------------------------------------------
    task
------------------------------------------------------------------*/
gulp.task('ect:sp', function(){
    gulp.src(config.src)
        .pipe(ect())
        .pipe(prettify(config.prettify))
        .pipe(gulp.dest(config.dest))
    ;
});
