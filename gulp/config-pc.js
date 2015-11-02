/*------------------------------------------------------------------------------------------------

    config-pc

------------------------------------------------------------------------------------------------*/
var PATH = {
    src        : 'app-pc/src',
    ignore_src : '!app-pc/src',
    build_root : 'app-pc'
};

/*------------------------------------------------------------------
    src
------------------------------------------------------------------*/
var src = {
    ect      : PATH.src + '/template/main/*.ect',
    css      : PATH.src + '/sass/**/*.scss',
    iconfont : [PATH.src + '/img/font/*.svg'],
    font     : PATH.src + '/img/font/template.scss',
    html     : PATH.src + '/img/font/template.html',
    js       : [
        'bower_components/jquery/dist/jquery.js',
        'bower_components/lodash/lodash.js',
        'bower_components/underscore.string/dist/underscore.string.js',
        PATH.src + '/js/router/*.js',
        PATH.src + '/js/model/*.js',
        PATH.src + '/js/collection/*.js',
        PATH.src + '/js/view/*.js',
        PATH.src + '/js/component_manager.js',
        PATH.src + '/js/application.js'
    ],
    js_hint  : [
        PATH.src + '/js/**/*.js',
        PATH.ignore_src + '/src/js/vendor/*.js'
    ],
    js_validate : [
        PATH.src + '/js/**/*.js',
        PATH.ignore_src + '/src/js/vendor/*.js'
    ],
    scsslint : [
        PATH.src + '/sass/**/*.scss',
        PATH.ignore_src + '/src/sass/foundation/_style-normalize.scss',
        PATH.ignore_src + '/src/sass/setup/_sprites.scss'
    ]
};

/*------------------------------------------------------------------
    dest
------------------------------------------------------------------*/
var dest = {
    ect       : PATH.build_root,
    css       : PATH.build_root + '/css/',
    iconfont  : PATH.build_root + '/font/',
    font      : PATH.src + '/sass/ui/',
    html      : PATH.build_root,
    js_concat : PATH.build_root + '/js'
};

/*------------------------------------------------------------------
    exports
------------------------------------------------------------------*/
module.exports = {
    ect : {
        prettify : {
            indent_size  : 4,
            extra_liners : ''
        },
        src  : src.ect,
        dest : dest.ect
    },
    css : {
        src          : src.css,
        sass         : {
            outputStyle : 'compressed'
        },
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
                basename　: PATH.src + '/img/font/font-preview'
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
        ect      : PATH.src + '/template/**/*.ect',
        iconfont : PATH.src + '/img/font/*.svg',
        css      : PATH.src + '/sass/**/**/*.scss',
        js       : [PATH.src + '/js/**/*.js', PATH.ignore_src + '/js/jst.js'],
        jst      : PATH.src + '/js/template/*.html.tmpl'
    },
    json_server : {
        data    : "gulp/mock.json",
        port    : 12345,
        baseUrl : "/api"
    }
};
