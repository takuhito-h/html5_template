/*------------------------------------------------------------------------------------------------

    ect

------------------------------------------------------------------------------------------------*/
import gulp from 'gulp';
import ect from 'gulp-ect';
import prettify from 'gulp-prettify';

const config = require('../config-sp').ect;

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
