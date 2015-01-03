var gulp         = require('gulp');
var sass         = require('gulp-ruby-sass');
var plumber      = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function() {
    return sass('src/sass/', {
        style: 'expanded'
    })
    .on('error', function (err) {
        console.error('Error', err.message);
    })
    .pipe(autoprefixer(['last 3 versions', "ie 8"]))
    .pipe(gulp.dest('css/'));
});

gulp.task('watch', function () {
    gulp.watch('src/sass/**/*.scss', ['sass']);
});