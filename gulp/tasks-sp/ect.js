/*------------------------------------------------------------------------------------------------

    ect

------------------------------------------------------------------------------------------------*/
import gulp from 'gulp';
import ect from 'gulp-ect';
import prettify from 'gulp-prettify';
import { ect as config } from '../config-sp';

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
