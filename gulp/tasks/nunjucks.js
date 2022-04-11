/*------------------------------------------------------------------------------------------------

    watch

------------------------------------------------------------------------------------------------*/
import { task, src, dest } from 'gulp';
import nunjucks from 'gulp-nunjucks-render';
import setting from '../setting/nunjucks.js';

task('nunjucks', () => {
    return src(setting.src.html)
        .pipe(nunjucks({
            path: setting.src.template
        }))
        .pipe(dest(setting.dest.root))
    ;
});
