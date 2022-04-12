/*------------------------------------------------------------------------------------------------

    watch

------------------------------------------------------------------------------------------------*/
import { src, dest } from 'gulp';
import nunjucksRender from 'gulp-nunjucks-render';
import setting from '../setting/nunjucks.js';

export function nunjucks() {
    return src(setting.src.html)
        .pipe(nunjucksRender({
            path: setting.src.template
        }))
        .pipe(dest(setting.dest.root))
    ;
};
