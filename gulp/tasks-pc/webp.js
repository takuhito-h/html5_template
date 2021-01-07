/*------------------------------------------------------------------------------------------------

    webp

------------------------------------------------------------------------------------------------*/
import gulp from 'gulp';
import gulpWebp from 'gulp-webp';
import rename from 'gulp-rename';
import setting from '../setting-pc/webp.js';

/*------------------------------------------------------------------
    task
------------------------------------------------------------------*/
gulp.task('webp:pc', function() {
    return gulp
        .src(setting.img, {
            allowEmpty : true,
        })
        .pipe(rename((path) => {
            path.basename += path.extname;
        }))
        .pipe(gulpWebp())
        .pipe(gulp.dest(setting.webpDir))
    ;
});
