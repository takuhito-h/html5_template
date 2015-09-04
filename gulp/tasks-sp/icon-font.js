/*------------------------------------------------------------------------------------------------

    icon-font

------------------------------------------------------------------------------------------------*/
var _           = require('lodash');
var gulp        = require('gulp');
var rename      = require("gulp-rename");
var iconfont    = require('gulp-iconfont');
var consolidate = require('gulp-consolidate');
var config      = require('../config-sp').iconfont;

/*------------------------------------------------------------------
    task
------------------------------------------------------------------*/
gulp.task('iconfont:sp', function(){
    gulp.src(config.src)
        .pipe(iconfont(config.options))
        .on('codepoints', function(codepoints) {
            var codepoint_options = _.merge(config.codepoint_options, {
                glyphs : codepoints
            });

            // シンボルフォント用のcssを作成
            gulp.src(config.font.src)
                .pipe(consolidate('lodash', codepoint_options))
                .pipe(rename(config.font.rename_options))
                .pipe(gulp.dest(config.font.dest))
            ;

            // シンボルフォント一覧のサンプルHTMLを作成
            gulp.src(config.html.src)
                .pipe(consolidate('lodash', codepoint_options))
                .pipe(rename(config.html.rename_options))
                .pipe(gulp.dest(config.html.dest))
            ;
        })
        .pipe(gulp.dest(config.dest))
    ;
});
