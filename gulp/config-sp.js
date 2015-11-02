/*------------------------------------------------------------------------------------------------

    config-sp

------------------------------------------------------------------------------------------------*/
var PATH = {
    src        : 'app-sp/src/',
    ignore_src : '!app-sp/src/',
    build_root : 'app-sp/'
};

/*------------------------------------------------------------------
    src
------------------------------------------------------------------*/
var src = {
    ect      : PATH.src + 'src/template/main/*.ect',
    css      : PATH.src + 'src/sass/**/*.scss',
    iconfont : [PATH.src + 'src/img/font/*.svg'],
    font     : PATH.src + 'src/img/font/template.scss',
    html     : PATH.src + 'src/img/font/template.html',
    js       : [
        'bower_components/jquery/dist/jquery.js',
        'bower_components/lodash/lodash.js',
        'bower_components/underscore.string/dist/underscore.string.js',
        PATH.src + 'src/js/router/*.js',
        PATH.src + 'src/js/model/*.js',
        PATH.src + 'src/js/collection/*.js',
        PATH.src + 'src/js/view/*.js',
        PATH.src + 'src/js/component_manager.js',
        PATH.src + 'src/js/application.js'
    ],
    js_hint  : [
        PATH.src + 'src/js/**/*.js',
        PATH.ignore_src + '/js/vendor/*.js'
    ],
    js_validate : [
        PATH.src + 'src/js/**/*.js',
        PATH.ignore_src + '/js/vendor/*.js'
    ],
    scsslint : [
        PATH.src + 'src/sass/**/*.scss',
        PATH.ignore_src + '/sass/foundation/_style-normalize.scss',
        PATH.ignore_src + '/sass/setup/_sprites.scss'
    ]
};

/*------------------------------------------------------------------
    dest
------------------------------------------------------------------*/
var dest = {
    ect       : PATH.build_root + '',
    css       : PATH.build_root + 'css/',
    iconfont  : PATH.build_root + 'font/',
    font      : PATH.src + 'src/sass/ui/',
    html      : './',
    js_concat : PATH.build_root + 'js/'
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
        cssnext      : {
            autoprefixer : ['last 3 versions', "ie 8"]
        },
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
                basename　: PATH.src + 'src/img/font/font-preview'
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
    },
    watch : {
        ect      : PATH.src + 'template/**/*.ect',
        iconfont : PATH.src + 'img/font/*.svg',
        css      : PATH.src + 'sass/**/**/*.scss',
        js       : [PATH.src + 'js/**/*.js', PATH.ignore_src + 'js/jst.js'],
        jst      : PATH.src + 'js/template/*.html.tmpl'
    },
    json_server : {
        data    : "gulp/mock.json",
        port    : 12345,
        baseUrl : "/api"
    }
};
