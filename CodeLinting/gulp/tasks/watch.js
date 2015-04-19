var gulp = require('gulp');

gulp.task('watch', function() {
    gulp.watch('./js/library/src/**/*.js', ['jshint']);
});