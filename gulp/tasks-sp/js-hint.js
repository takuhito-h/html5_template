/*------------------------------------------------------------------------------------------------

    js-hint

------------------------------------------------------------------------------------------------*/
import gulp from 'gulp';
import jshint from 'gulp-jshint';
import { js_hint as config } from '../config-sp';

/*------------------------------------------------------------------
    task
------------------------------------------------------------------*/
gulp.task('jshint:sp', function() {

    return gulp
        .src(config.src)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
    ;

});