// Karma 0.11.0 configuration

module.exports = function(config) {
  config.configure({

    // frameworks to use
    frameworks: ['jasmine'],

    // base path, that will be used to resolve files and exclude
    basePath: '',

    // list of files / patterns to load in the browser
    files: [
        'js/lib/angular.min.js',
        'js/lib/angular-resource.min.js',
        'js/app.js',
        'js/service/drinkService.js',
        'js/controller/drinkController.js',
        'js/directive/scList.js',

        'test/jasmine/**/*.js'
    ],



    // list of files to exclude
    exclude: [
    ],

    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['dots', 'progress', 'junit'],


    // web server port
    port: 9876,


    // cli runner port
    runnerPort: 9101,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: karma.LOG_DISABLE || karma.LOG_ERROR || karma.LOG_WARN || karma.LOG_INFO || karma.LOG_DEBUG
    logLevel: config.LOG_DEBUG,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    //browsers: ['Firefox', 'IE9 - Win7'],
      browsers: ['Firefox'],
      //browsers: ['PhantomJS'],


    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false

    /*plugins: [
        'karma-jasmine',
        'karma-chrome-launcher',
        'karma-firefox-launcher',
        'karma-phantomjs-launcher',
        'karma-coverage',
        'karma-junit-reporter',
        'karma-spec-reporter',
        'karma-growl-reporter',
        'karma-phantomjs-launcher',
        'karma-safari-launcher',
        'karma-ievms'
      ]*/
  });
};
