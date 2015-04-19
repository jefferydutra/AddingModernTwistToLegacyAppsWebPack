var gulp = require('gulp');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var notify = require("gulp-notify");
var jscs = require('gulp-jscs');
var jscsstylish = require('gulp-jscs-stylish');
var config = require('../config').jsCodeQualityPaths;

gulp.task('jshint', function() {

    return gulp.src(config.scripts)
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter(stylish))
        .pipe(jscs())                             // enforce style guide
        .on('error', function() {
            })              // don't stop on error
        .pipe(jscsstylish.combineWithHintResults())
        .pipe(notify(function(file) {
                  if (file.jshint.success) {
                      // Don't show something if success
                      return false;
                  }

                  var errors = file.jshint.results.map(function(data) {
                      if (data.error) {
                          return '(' + data.error.line + ':' + data.error.character + ') ' + data.error.reason;
                      }
                  }).join('\n');

                  return file.relative + ' (' + file.jshint.results.length + ' errors)\n' + errors;
              }));

});
