var dest = "./dist/src";
var src = './js/library/src';

module.exports = {

    browserify: {
        bundleConfigs: [{
            entries: src + '/main.js',
            dest: dest,
            outputName: 'app.js'
        }]
    },

    jsCodeQualityPaths: {
        scripts: [
            './js/library/src/**/*.js']
    }

};