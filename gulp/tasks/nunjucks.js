/*------------------------------------------------------------------------------------------------

    watch

------------------------------------------------------------------------------------------------*/
import { src, dest } from 'gulp';
import nunjucksRender from 'gulp-nunjucks-render';
import setting from '../setting/nunjucks.js';

const nunjucksTask = () => {
    return src(setting.src.html)
        .pipe(nunjucksRender({
            path: setting.src.template
        }))
        .pipe(dest(setting.dest.root))
    ;
}

export { nunjucksTask as nunjucks };
