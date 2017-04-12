/*------------------------------------------------------------------------------------------------

    icon-font

------------------------------------------------------------------------------------------------*/
import _  from 'lodash';
import gulp from 'gulp';
import rename from 'gulp-rename';
import iconfont from 'gulp-iconfont';
import consolidate from 'gulp-consolidate';

const config = require('../config-sp').iconfont;

/*------------------------------------------------------------------
    task
------------------------------------------------------------------*/
gulp.task('iconfont:sp', function(){
    gulp.src(config.src)
        .pipe(iconfont(config.options))
        .on('glyphs', function(glyphs, options) {
            var consolidate_options = _.merge(config.consolidate_options, {
                glyphs : glyphs
            });

            // シンボルフォント用のcssを作成
            gulp.src(config.font.src)
                .pipe(consolidate('lodash', consolidate_options))
                .pipe(rename(config.font.rename_options))
                .pipe(gulp.dest(config.font.dest))
            ;

            // シンボルフォント一覧のサンプルHTMLを作成
            gulp.src(config.html.src)
                .pipe(consolidate('lodash', consolidate_options))
                .pipe(rename(config.html.rename_options))
                .pipe(gulp.dest(config.html.dest))
            ;
        })
        .pipe(gulp.dest(config.dest))
    ;
});
