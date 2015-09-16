/*------------------------------------------------------------------------------------------------

    watch

------------------------------------------------------------------------------------------------*/
var gulp  = require('gulp');
var watch = require('gulp-watch');

/*------------------------------------------------------------------
    task
------------------------------------------------------------------*/
gulp.task('watch:sp', function () {
    watch('app-sp/src/template/**/*.ect', function(){
        gulp.start(['ect:sp']);
    });

    watch('app-sp/src/img/font/*.svg', function(){
        gulp.start(['iconfont:sp']);
    });

    watch('app-sp/src/sass/**/*.scss', function(){
        gulp.start(['build-css:sp']);
    });

    watch('app-sp/src/js/**/*.js', function(){
        gulp.start(['build-js:sp']);
    });
});