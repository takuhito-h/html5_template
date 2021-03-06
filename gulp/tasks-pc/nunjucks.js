'use strict';

import gulp from 'gulp';
import nunjucks from 'gulp-nunjucks-render';
import setting from '../setting-pc/nunjucks.js';

gulp.task('nunjucks:pc', function(){
    return gulp.src(setting.src.html + '**/*.njk')
        .pipe(nunjucks({
            path: setting.src.template
        }))
        .pipe(gulp.dest(setting.dest.root))
    ;
});
