/*------------------------------------------------------------------------------------------------

    watch

------------------------------------------------------------------------------------------------*/
import { watch, series } from 'gulp';
import { css, iconfont, nunjucks, webpack } from "./index";
import { bsReload } from "../tasks-common/browser-sync";
import setting from '../setting/watch.js';

/*------------------------------------------------------------------
    task
------------------------------------------------------------------*/
const watchTask = (done) => {
    watch(setting.nunjucks, series(nunjucks, bsReload));

    watch(setting.iconfont, series(iconfont, bsReload));

    watch(setting.css, series(css, bsReload));

    watch(setting.js, series(webpack, bsReload));

    done();
};

export { watchTask as watch };
