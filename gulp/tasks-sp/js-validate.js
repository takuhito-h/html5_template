/*------------------------------------------------------------------------------------------------

    js-validate

------------------------------------------------------------------------------------------------*/
import gulp from 'gulp';
import jsvalidate from 'gulp-jsvalidate';
import { js_validate as config } from '../config-sp';

/*------------------------------------------------------------------
    task
------------------------------------------------------------------*/
gulp.task('jsvalidate:sp', function() {

    return gulp
        .src(config.src)
        .pipe(jsvalidate())
    ;

});