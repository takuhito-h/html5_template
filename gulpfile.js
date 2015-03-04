var gulp = require('gulp');
var path = require('path');

var scsslint     = require('gulp-scss-lint');
var sass         = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');

var jsvalidate = require('gulp-jsvalidate');
var jshint     = require('gulp-jshint');
var concat     = require('gulp-concat');
var uglify     = require('gulp-uglify');

var webpack   = require('webpack');
var g_webpack = require('gulp-webpack');

var ect = require('gulp-ect');

/*------------------------------------------------------------------
    scsslint
------------------------------------------------------------------*/
gulp.task('scsslint', function() {

    return gulp
        .src([
            'src/sass/**/*.scss',
            '!src/sass/layout/_style-normalize.scss',
            '!src/sass/setup/_sprites.scss',
        ])
        .pipe(scsslint())
    ;

});

/*------------------------------------------------------------------
    css生成
------------------------------------------------------------------*/
gulp.task('css', function() {

    return sass('src/sass/', {
            style: 'expanded'
        })
        .on('error', function (err) {
            console.error('Error', err.message);
        })
        .pipe(autoprefixer(['last 3 versions', "ie 8"]))
        .pipe(gulp.dest('css/'))
    ;

});

/*------------------------------------------------------------------
    jsvalidate
------------------------------------------------------------------*/
gulp.task('jsvalidate', function() {

    return gulp
        .src(['src/js/**/*.js', '!src/js/vendor/*.js'])
        .pipe(jsvalidate())
    ;

});

/*------------------------------------------------------------------
    jshint
------------------------------------------------------------------*/
gulp.task('jshint', function() {

    return gulp
        .src(['src/js/**/*.js', '!src/js/vendor/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
    ;

});

/*------------------------------------------------------------------
    js結合
------------------------------------------------------------------*/
gulp.task('js', function() {

    return gulp
        .src([
            "src/js/vendor/*.js",
            "src/js/vendor/mock/*.js",
            "src/js/components/dependents/*.js",
            "src/js/components/*.js",
            "src/js/component_manager.js",
            "src/js/pages/*.js",
            "src/js/application.js"
        ])
        .pipe(concat('script.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('js'))
    ;

});

/*------------------------------------------------------------------
    webpack
------------------------------------------------------------------*/
gulp.task('webpack', function() {

    return gulp
        .src('./src/js/application.js')
        .pipe(g_webpack({
            entry: './src/js/application.js',
            output: {
                filename: 'bundle.min.js'
            },
            resolve: {
                root: [path.join(process.cwd(), 'bower_components')],
                extensions: ['', '.js']
            },
            plugins: [
                new webpack.ResolverPlugin(
                    new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
                ),
                new webpack.ProvidePlugin({
                    jQuery: "jquery",
                    $: 'jquery'
                })
            ]
        }))
        // .pipe(uglify())
        .pipe(gulp.dest('./js/'))
    ;

});

/*------------------------------------------------------------------
    watch
------------------------------------------------------------------*/
gulp.task('watch', function () {
    gulp.watch('src/sass/**/*.scss', ['scsslint', 'css']);
    gulp.watch('src/js/**/*.js', ['jsvalidate', 'js']);
});