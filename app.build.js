// RequireJSビルド設定ファイル
({
    appDir: ".",
    baseUrl: "js",
    dir: "../optimized-project",
    paths: {
        jQuery    : "lib/jquery-1.8.3.min",
        modernizr : "lib/modernizr-2.6.2.min",
        myLibrary : "lib/myLibrary"
    },
    modules: [
        {
            name: "script"
        }
    ]
})