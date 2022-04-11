import { task, parallel, series } from 'gulp';
import requireDir from "require-dir";

/*------------------------------------------------------------------
    tasks-common
------------------------------------------------------------------*/
requireDir("./gulp/tasks-common", { recurse: true });

/*------------------------------------------------------------------
    tasks
------------------------------------------------------------------*/
requireDir("./gulp/tasks", { recurse: true });

/*------------------------------------------------------------------
    exports
------------------------------------------------------------------*/
task('build', parallel('nunjucks', 'webpack', series('iconfont', 'css')));
task('default', parallel('webserver', parallel('nunjucks', 'webpack', series('iconfont', 'css')), 'watch'));
