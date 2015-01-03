var gulp         = require('gulp');

var scsslint     = require('gulp-scss-lint');
var sass         = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');

var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

/*------------------------------------------------------------------
    scsslint
------------------------------------------------------------------*/
gulp.task('scsslint', function() {
    return gulp.src([
        'src/sass/**/*.scss',
        '!src/sass/layout/_style-normalize.scss',
        '!src/sass/setup/_sprites.scss',
    ])
    .pipe(scsslint());
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
    .pipe(gulp.dest('css/'));
});

/*------------------------------------------------------------------
    jshint
------------------------------------------------------------------*/
gulp.task('jshint', function() {
    return gulp.src(['src/js/**/*.js', '!src/js/vendor/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
    ;
});

/*------------------------------------------------------------------
    js結合
------------------------------------------------------------------*/
gulp.task('js', function() {
    return gulp.src([
        "src/js/vendor/*.js",
        "src/js/vendor/mock/*.js",
        "src/js/modules/dependents/*.js",
        "src/js/modules/*.js",
        "src/js/component_manager.js",
        "src/js/pages/*.js",
        "src/js/application.js"
    ])
        .pipe(concat('script.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('js'))
    ;
});

gulp.task('watch', function () {
    gulp.watch('src/sass/**/*.scss', ['scsslint', 'css']);
    gulp.watch('src/js/**/*.js', ['jshint', 'js']);
});