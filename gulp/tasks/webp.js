/*------------------------------------------------------------------------------------------------

    webp

------------------------------------------------------------------------------------------------*/
import { task, src, dest } from 'gulp';
import gulpWebp from 'gulp-webp';
import rename from 'gulp-rename';
import setting from '../setting/webp.js';

/*------------------------------------------------------------------
    task
------------------------------------------------------------------*/
task('webp', (done) => {
    return src(setting.img, {
            allowEmpty : true,
        })
        .pipe(rename((path) => {
            path.basename += path.extname;
        }))
        .pipe(gulpWebp())
        .pipe(dest(setting.webpDir))
    ;
});
