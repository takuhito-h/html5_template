/*------------------------------------------------------------------------------------------------

    icon-font

------------------------------------------------------------------------------------------------*/
import { src, dest } from 'gulp';
import _ from 'lodash';
import rename from 'gulp-rename';
import gulpIconfont from 'gulp-iconfont';
import consolidate from 'gulp-consolidate';
import setting from '../setting/icon-font.js';

/*------------------------------------------------------------------
    シンボルフォント用のcssを作成
------------------------------------------------------------------*/
const create_css = function(options){
    src(setting.css.src)
        .pipe(consolidate('lodash', options))
        .pipe(rename(setting.css.rename_options))
        .pipe(dest(setting.css.dest))
    ;
};

/*------------------------------------------------------------------
    シンボルフォント一覧用のHTMLを作成
------------------------------------------------------------------*/
const create_html = (options) => {
    src(setting.html.src)
        .pipe(consolidate('lodash', options))
        .pipe(rename(setting.html.rename_options))
        .pipe(dest(setting.html.dest))
    ;
};

/*------------------------------------------------------------------
    アイコンフォント用の各種ファイルを作成
------------------------------------------------------------------*/
const create_files = (glyphs, options) => {
    const consolidate_options = _.merge(setting.consolidate_options, {
        glyphs : glyphs
    });

    create_css(consolidate_options);
    create_html(consolidate_options);
};

/*------------------------------------------------------------------
    task
------------------------------------------------------------------*/
const iconfontTask = () => {
    return src(setting.src)
        .pipe(gulpIconfont(setting.options))
        .on('glyphs', create_files)
        .pipe(dest(setting.dest))
    ;
}

export { iconfontTask as iconfont };
