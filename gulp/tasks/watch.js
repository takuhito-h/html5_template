/*------------------------------------------------------------------------------------------------

    watch

------------------------------------------------------------------------------------------------*/
import { task, watch, series } from 'gulp';
import setting from '../setting/watch.js';

/*------------------------------------------------------------------
    task
------------------------------------------------------------------*/
task('watch', (done) => {
    watch(setting.nunjucks, series('nunjucks', 'bs-reload'));

    watch(setting.iconfont, series('iconfont', 'bs-reload'));

    watch(setting.css, series('css', 'bs-reload'));

    watch(setting.js, series('webpack', 'bs-reload'));

    done();
});
