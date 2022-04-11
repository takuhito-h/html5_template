import { parallel, series } from 'gulp';
import { css, iconfont, nunjucks, watch, webp, webpack } from './gulp/tasks/';
import { imagemin, webServer } from './gulp/tasks-common/';

/*------------------------------------------------------------------
    exports
------------------------------------------------------------------*/
const build = parallel(nunjucks, webpack, series(iconfont, css));
const defaultTask = parallel(webServer, parallel(nunjucks, webpack, series(iconfont, css)), watch);

export { defaultTask as default, build, imagemin, webp };
