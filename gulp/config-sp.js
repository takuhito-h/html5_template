/*------------------------------------------------------------------------------------------------

    config-sp

------------------------------------------------------------------------------------------------*/
var src = {
    ect      : 'app-sp/src/template/main/*.ect',
    css      : 'app-sp/src/sass',
    iconfont : ['app-sp/src/img/font/*.svg'],
    font     : 'app-sp/src/img/font/template.scss',
    html     : 'app-sp/src/img/font/template.html',
    js       : [
        'bower_components/jquery/dist/jquery.js',
        'bower_components/lodash/lodash.js',
        'bower_components/underscore.string/dist/underscore.string.js',
        'app-sp/src/js/router/*.js',
        'app-sp/src/js/model/*.js',
        'app-sp/src/js/collection/*.js',
        'app-sp/src/js/view/*.js',
        'app-sp/src/js/component_manager.js',
        'app-sp/src/js/application.js'
    ],
    js_hint  : [
        'app-sp/src/js/**/*.js',
        '!app-sp/src/js/vendor/*.js'
    ],
    js_validate : [
        'app-sp/src/js/**/*.js',
        '!app-sp/src/js/vendor/*.js'
    ],
    scsslint : [
        'app-sp/src/sass/**/*.scss',
        '!app-sp/src/sass/foundation/_style-normalize.scss',
        '!app-sp/src/sass/setup/_sprites.scss'
    ]
};

var dest = {
    ect       : 'app-sp/',
    css       : 'app-sp/css/',
    iconfont  : 'app-sp/font/',
    font      : 'app-sp/src/sass/ui/',
    html      : './',
    js_concat : 'app-sp/js/'
};

/*------------------------------------------------------------------
    exports
------------------------------------------------------------------*/
module.exports = {
    ect : {
        src  : src.ect,
        dest : dest.ect
    },
    css : {
        src          : src.css,
        autoprefixer : ['last 3 versions', "ie 8"],
        dest         : dest.css
    },
    iconfont : {
        src  : src.iconfont,
        dest : dest.iconfont,
        options : {
            fontName       : 'icon',
            startCodepoint : 0xF001,
        },
        codepoint_options : {
            fontName  : 'icon',
            fontPath  : '../font/', // フォントパスをCSSからの相対パスで指定
            className : 'icon', // CSSのフォントのクラス名を指定
            timeStamp : Date.now()
        },
        font : {
            src : src.font,
            rename_options : {
                basename　: '_style-icon'
            },
            dest : dest.font
        },
        html : {
            src  : src.html,
            rename_options : {
                basename　: 'app-sp/src/img/font/font-preview'
            },
            dest : dest.html
        }
    },
    js_concat : {
        src : src.js,
        file_name : 'script.min.js',
        dest      : dest.js_concat
    },
    js_hint : {
        src : src.js_hint
    },
    js_validate : {
        src : src.js_validate
    },
    scsslint : {
        src : src.scsslint
    }
};
