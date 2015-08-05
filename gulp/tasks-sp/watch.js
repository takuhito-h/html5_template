/*------------------------------------------------------------------------------------------------

    watch

------------------------------------------------------------------------------------------------*/
var gulp  = require('gulp');
var watch = require('gulp-watch');

/*------------------------------------------------------------------
    task
------------------------------------------------------------------*/
gulp.task('watch:sp', function () {
    watch('openers_sp/src/img/font/*.svg', function(){
        gulp.start(['iconfont:sp']);
    });

    watch('openers_sp/src/sass/**/*.scss', function(){
        gulp.start(['build-css:sp']);
    });

    watch('openers_sp/src/js/**/*.js', function(){
        gulp.start(['build-js:sp']);
    });
});