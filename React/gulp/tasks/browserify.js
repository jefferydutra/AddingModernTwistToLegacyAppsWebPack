var browserify = require('browserify');
var watchify = require('watchify');
var uglifyify = require('uglifyify');
var bundleLogger = require('../util/bundleLogger');
var gulp = require('gulp');
var handleErrors = require('../util/handleErrors');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var reactify = require('reactify');
var config = require('../config').browserify;
var mold = require('mold-source-map');

gulp.task('browserify', function(callback) {

  var bundleQueue = config.bundleConfigs.length;
  var isDebug = !global.inRelease;

  var browserifyThis = function(bundleConfig) {

    var bundler = browserify({
      // Required watchify args
      cache: {}, packageCache: {}, fullPaths: true,
      // Specify the entry point of your app
      entries: bundleConfig.entries,
      // Add file extentions to make optional in your requires
      extensions: config.extensions,
      // Enable source maps!
      debug: isDebug,
      'opts.basedir': './'
    });
    bundler.transform(reactify);
    if (global.inRelease) {
      bundler.transform({global: true}, uglifyify);
    }

    var bundle = function() {
      // Log when bundling starts
      bundleLogger.start(bundleConfig.outputName);

      return bundler
        .bundle()
        // Report compile errors
        .on('error', handleErrors)
        .pipe(mold.transformSourcesRelativeTo('./'))

        // Use vinyl-source-stream to make the
        // stream gulp compatible. Specifiy the
        // desired output filename here.

        .pipe(source(bundleConfig.outputName))
        .pipe(buffer())
        // Specify the output destination
        .pipe(gulp.dest(bundleConfig.dest))
        .on('end', reportFinished);
    };

    if (global.isWatching) {
      // Wrap with watchify and rebundle on changes
      bundler = watchify(bundler);
      // Rebundle on update
      bundler.on('update', bundle);
    }

    var reportFinished = function() {
      // Log when bundling completes
      bundleLogger.end(bundleConfig.outputName);

      if (bundleQueue) {
        bundleQueue--;
        if (bundleQueue === 0) {
          // If queue is empty, tell gulp the task is complete.
          // https://github.com/gulpjs/gulp/blob/master/docs/API.md#accept-a-callback
          callback();
        }
      }
    };

    return bundle();
  };

  // Start bundling with Browserify for each bundleConfig specified
  config.bundleConfigs.forEach(browserifyThis);
});