/*------------------------------------------------------------------------------------------------

    icon-font

------------------------------------------------------------------------------------------------*/
import _ from 'lodash';
import gulp from 'gulp';
import rename from 'gulp-rename';
import iconfont from 'gulp-iconfont';
import consolidate from 'gulp-consolidate';
import setting from '../setting-pc/icon-font.js';

/*------------------------------------------------------------------
    task
------------------------------------------------------------------*/
gulp.task('iconfont:pc', function(){
    gulp.src(setting.src)
        .pipe(iconfont(setting.options))
        .on('glyphs', function(glyphs, options) {
            var consolidate_options = _.merge(setting.consolidate_options, {
                glyphs : glyphs
            });

            // シンボルフォント用のcssを作成
            gulp.src(setting.font.src)
                .pipe(consolidate('lodash', consolidate_options))
                .pipe(rename(setting.font.rename_options))
                .pipe(gulp.dest(setting.font.dest))
            ;

            // シンボルフォント一覧のサンプルHTMLを作成
            gulp.src(setting.html.src)
                .pipe(consolidate('lodash', consolidate_options))
                .pipe(rename(setting.html.rename_options))
                .pipe(gulp.dest(setting.html.dest))
            ;
        })
        .pipe(gulp.dest(setting.dest))
    ;
});
