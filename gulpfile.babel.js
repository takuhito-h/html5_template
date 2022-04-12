import { parallel, series } from 'gulp';
import { css, iconfont, nunjucks, watch, webp, webpack, imagemin, webServer } from './gulp';

/*------------------------------------------------------------------
    exports
------------------------------------------------------------------*/
const build = parallel(nunjucks, webpack, series(iconfont, css));
const defaultTask = parallel(webServer, build, watch);

export { defaultTask as default, build, imagemin, webp };
