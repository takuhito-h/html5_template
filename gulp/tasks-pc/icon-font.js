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
    シンボルフォント用のcssを作成
------------------------------------------------------------------*/
const create_css = function(options){
    gulp.src(setting.css.src)
        .pipe(consolidate('lodash', options))
        .pipe(rename(setting.css.rename_options))
        .pipe(gulp.dest(setting.css.dest))
    ;
};

/*------------------------------------------------------------------
    シンボルフォント一覧用のHTMLを作成
------------------------------------------------------------------*/
const create_html = function(options){
    gulp.src(setting.html.src)
        .pipe(consolidate('lodash', options))
        .pipe(rename(setting.html.rename_options))
        .pipe(gulp.dest(setting.html.dest))
    ;
};

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

            create_css(consolidate_options);

            create_html(consolidate_options);
        })
        .pipe(gulp.dest(setting.dest))
    ;
});