/*------------------------------------------------------------------------------------------------

    default

------------------------------------------------------------------------------------------------*/
import gulp from 'gulp';

/*------------------------------------------------------------------
    task
------------------------------------------------------------------*/
gulp.task('default', gulp.series('bs-init', 'webserver', 'jsonmock', 'build:pc', 'build:sp', 'watch:pc', 'watch:sp'));
