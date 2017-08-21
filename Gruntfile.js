const webpackConfig = require('./webpack.config.js');

/* eslint global-require: "off" */
module.exports = function exports(grunt) {
  // Project configuration.
  grunt.initConfig({
    clean: {
      dist: 'dist',
      temp: 'temp',
    },
    uglify: {
      my_target: {
        files: {
          'dist/scripts/bundle.min.js': ['temp/scripts/bundle.js'],
        },
      },
    },
    webpack: {
      prod: webpackConfig,
      dev: webpackConfig,
    },

    // Watch for any changes and call associated task
    watch: {
      options: {
        event: ['changed', 'added', 'deleted'],
      },
      scripts: {
        files: ['source/scripts/**/*.js', 'source/scripts/**/*.vue'],
        tasks: ['webpack', 'uglify', 'clean:temp'],
      },
    },
  });

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-webpack');

  // Default task
  grunt.registerTask('default', ['webpack', 'uglify', 'clean:temp', 'watch']);

  // Wipe dist and then watch
  grunt.registerTask('clean-watch', ['clean:dist', 'default']);
};
