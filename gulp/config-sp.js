/*------------------------------------------------------------------------------------------------

    config-sp

------------------------------------------------------------------------------------------------*/
import webpack from 'webpack';

/**
 * 各種ディレクトリのパスを設定する。
 * src : ソースファイルの設置ディレクトリを設定。
 * ignore_src : 除外用のソースファイルの設置ディレクトリを設定。
 * build_root : ビルドファイルの設置先ディレクトリを設定。
 * @type {Object}
 */
const PATH = {
    src        : 'app-sp/src',
    ignore_src : '!app-sp/src',
    build_root : 'app-sp'
};

/**
 * 各種ソースファイルのパスを設定。
 * @type {Object}
 */
const src = {
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
        PATH.ignore_src + '/js/vendor/*.js'
    ],
    js_validate : [
        PATH.src + '/js/**/*.js',
        PATH.ignore_src + '/js/vendor/*.js'
    ],
    scsslint : [
        PATH.src + '/sass/**/*.scss',
        PATH.ignore_src + '/sass/foundation/_style-normalize.scss',
        PATH.ignore_src + '/sass/setup/_sprites.scss'
    ]
};

/**
 * 各種ビルド結果のファイルを出力するディレクトリを設定。
 * @type {Object}
 */
const dest = {
    ect       : PATH.build_root + '',
    css       : PATH.build_root + '/css/',
    iconfont  : PATH.build_root + '/font/',
    font      : PATH.src + '/sass/ui/',
    html      : PATH.src + '/img/font/',
    js_concat : PATH.build_root + '/js/'
};

/**
 * タスク定義ファイルで使用する設定。
 * @type {Object}
 */
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
            browsers : ['last 3 versions']
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
        consolidate_options : {
            fontName  : 'icon',
            fontPath  : '../font/', // フォントパスをCSSからの相対パスで指定
            className : 'icon', // CSSのフォントのクラス名を指定
            timeStamp : Date.now()
        },
        font : {
            src : src.font,
            rename_options : {
                basename　: '_icon'
            },
            dest : dest.font
        },
        html : {
            src  : src.html,
            rename_options : {
                basename　: 'font-preview'
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
    },
    webpack : {
        entry  : './' + PATH.src + '/js/application.js',
        output : {
            filename : './' + PATH.build_root + '/js/script.min.js'
        },
        module : {
            loaders : [
                {
                    test : /\.jsx$/,
                    loader: 'jsx-loader'
                },
                {
                    test: /\.js(x?)$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                }
            ]
        },
        resolve : {
            extensions : ['', '.js', '.jsx'],
            modulesDirectories: ["node_modules"]
        },
        plugins : [
            new webpack.ResolverPlugin([
                new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
            ], ["normal", "loader"])
        ]
    }
};
