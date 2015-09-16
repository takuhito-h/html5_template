/*------------------------------------------------------------------------------------------------

    config-pc

------------------------------------------------------------------------------------------------*/
var src = {
    ect      : 'app-pc/src/template/main/*.ect',
    css      : 'app-pc/src/sass',
    iconfont : ['app-pc/src/img/font/*.svg'],
    font     : 'app-pc/src/img/font/template.scss',
    html     : 'app-pc/src/img/font/template.html',
    js       : [
        'bower_components/jquery/dist/jquery.js',
        'bower_components/lodash/lodash.js',
        'bower_components/underscore.string/dist/underscore.string.js',
        'app-pc/src/js/router/*.js',
        'app-pc/src/js/model/*.js',
        'app-pc/src/js/collection/*.js',
        'app-pc/src/js/view/*.js',
        'app-pc/src/js/component_manager.js',
        'app-pc/src/js/application.js'
    ],
    js_hint  : [
        'app-pc/src/js/**/*.js',
        '!app-pc/src/js/vendor/*.js'
    ],
    js_validate : [
        'app-pc/src/js/**/*.js',
        '!app-pc/src/js/vendor/*.js'
    ],
    scsslint : [
        'app-pc/src/sass/**/*.scss',
        '!app-pc/src/sass/foundation/_style-normalize.scss',
        '!app-pc/src/sass/setup/_sprites.scss'
    ]
};

var dest = {
    ect       : 'app-pc/',
    css       : 'app-pc/css/',
    iconfont  : 'app-pc/font/',
    font      : 'app-pc/src/sass/ui/',
    html      : './',
    js_concat : 'app-pc/js'
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
            fontName: 'icon',
            startCodepoint: 0xF001,
        },
        codepoint_options : {
            fontName: 'icon',
            fontPath: '../font/', // フォントパスをCSSからの相対パスで指定
            className: 'icon', // CSSのフォントのクラス名を指定
            timeStamp: Date.now()
        },
        font : {
            src : src.font,
            rename_options : {
                basename: '_style-icon'
            },
            dest : dest.font
        },
        html : {
            src  : src.html,
            rename_options : {
                basename: 'app-pc/src/img/font/font-preview'
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
