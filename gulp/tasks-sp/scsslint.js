/*------------------------------------------------------------------------------------------------

    scsslint

------------------------------------------------------------------------------------------------*/
import gulp from 'gulp';
import scsslint from 'gulp-scss-lint';
import setting from '../setting-sp/scsslint.js';

/*------------------------------------------------------------------
    task
------------------------------------------------------------------*/
gulp.task('scsslint:sp', function() {

    return gulp
        .src(setting.src)
        .pipe(scsslint())
    ;

});
