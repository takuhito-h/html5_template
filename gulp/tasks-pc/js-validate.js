/*------------------------------------------------------------------------------------------------

    js-validate

------------------------------------------------------------------------------------------------*/
import gulp from 'gulp';
import jsvalidate from 'gulp-jsvalidate';
import { js_validate as config } from '../config-pc';

/*------------------------------------------------------------------
    task
------------------------------------------------------------------*/
gulp.task('jsvalidate:pc', function() {

    return gulp
        .src(config.src)
        .pipe(jsvalidate())
    ;

});