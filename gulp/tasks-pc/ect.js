/*------------------------------------------------------------------------------------------------

    ect

------------------------------------------------------------------------------------------------*/
import gulp from 'gulp';
import ect from 'gulp-ect';
import prettify from 'gulp-prettify';
import setting from '../setting-pc/ect.js';

/*------------------------------------------------------------------
    task
------------------------------------------------------------------*/
gulp.task('ect:pc', function(){
    gulp.src(setting.src)
        .pipe(ect())
        .pipe(prettify(setting.prettify))
        .pipe(gulp.dest(setting.dest))
    ;
});
