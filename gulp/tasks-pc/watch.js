/*------------------------------------------------------------------------------------------------

    watch

------------------------------------------------------------------------------------------------*/
var gulp  = require('gulp');
var watch = require('gulp-watch');

/*------------------------------------------------------------------
    task
------------------------------------------------------------------*/
gulp.task('watch:pc', function () {
    watch('app-pc/src/template/**/*.ect', function(){
        gulp.start(['ect:pc']);
    });

    watch('app-pc/src/img/font/*.svg', function(){
        gulp.start(['iconfont:pc']);
    });

    watch('app-pc/src/sass/**/*.scss', function(){
        gulp.start(['build-css:pc']);
    });

    watch('app-pc/src/js/**/*.js', function(){
        gulp.start(['build-js:pc']);
    });
});