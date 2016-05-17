/**
 * Created by Vang on 17/05/2016.
 */
var gulp = require('gulp'); //tool
var less = require('gulp-less'); //library for compiling less -> css
var removeHtmlComments = require('gulp-remove-html-comments');
var minify = require('gulp-clean-css');


gulp.task('less', function() {
    gulp.src('css.less')
        .pipe(less())
        .pipe(minify())
        .pipe(gulp.dest('www/css'));
});

gulp.task('watch', function() {
    gulp.watch('menu.less', ['less']);
    gulp.watch('*.html', ['html']);
});

gulp.task('html', function () {
    return gulp.src(['*.html', 'app/partials/*.html'])
        .pipe(removeHtmlComments())
        .pipe(gulp.dest('www'));

});