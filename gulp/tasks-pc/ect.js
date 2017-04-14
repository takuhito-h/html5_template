/*------------------------------------------------------------------------------------------------

    ect

------------------------------------------------------------------------------------------------*/
import gulp from 'gulp';
import ect from 'gulp-ect';
import prettify from 'gulp-prettify';
import { ect as config } from '../config-pc';

/*------------------------------------------------------------------
    task
------------------------------------------------------------------*/
gulp.task('ect:pc', function(){
    gulp.src(config.src)
        .pipe(ect())
        .pipe(prettify(config.prettify))
        .pipe(gulp.dest(config.dest))
    ;
});
