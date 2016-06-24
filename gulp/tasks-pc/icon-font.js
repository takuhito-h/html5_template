/*------------------------------------------------------------------------------------------------

    icon-font

------------------------------------------------------------------------------------------------*/
var _           = require('lodash');
var gulp        = require('gulp');
var rename      = require("gulp-rename");
var iconfont    = require('gulp-iconfont');
var consolidate = require('gulp-consolidate');
var config      = require('../config-pc').iconfont;

/*------------------------------------------------------------------
    task
------------------------------------------------------------------*/
gulp.task('iconfont:pc', function(){
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
