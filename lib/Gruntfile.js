module.exports = function(grunt) {

  // Plugin configuration
  grunt.initConfig({
    jshint: {
      all: {
        src: ['../**/*.js', '!../lib/**/*', '!./Gruntfile.js'],
        options: {
          jshintrc: true
        }
      }
    },
    watch: {
      options: {
        livereload: true
      },
      js: {
        files: ['../**/*.js', '!../lib/**/*'],
        tasks: ['jshint']
      },
      json: {
        files: ['../**/*.json', '!../lib/**/*'],
        tasks: ['jsonlint']
      },
      sass: {
        files: ['../**/*.scss', '!../lib/**/*'],
        tasks: ['sass']
      }
    },
    jsonlint: {
      all: {
        src: ['../**/*.json', '!../lib/**/*'],
        options: {
          format: true,
          indent: 2
        }
      }
    },
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {                         // Dictionary of files
          '../dist/main.css': '../src/sass/main.scss'       // 'destination': 'source'
        }
      }
    }
  });
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['sass','watch']);
};
