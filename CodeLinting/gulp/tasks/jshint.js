var gulp = require('gulp');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var notify = require('gulp-notify');
var jscs = require('gulp-jscs');
var jscsstylish = require('gulp-jscs-stylish');
var config = require('../config').jsCodeQualityPaths;

gulp.task('jshint', function() {
    var mapResults = function(data) {
        if (data.error) {
            return '(' + data.error.line + ':' + data.error.character + ') ' + data.error.reason;
        }
    };

    var notifyHandler = function(file) {
        if (file.jshint.success) {
            return false;
        }

        var errors = file.jshint.results
            .map(mapResults)
            .join('\n');

        return file.relative + ' (' + file.jshint.results.length + ' errors)\n' + errors;
    };

    return gulp
        .src(config.scripts)
        .pipe(jshint())
        .pipe(jshint.reporter(stylish))
        .pipe(jscs())
        .on('error', function() {})
        .pipe(jscsstylish.combineWithHintResults())
        .pipe(notify(notifyHandler));
});
