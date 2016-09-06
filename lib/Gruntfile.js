module.exports = function(grunt) {

  // Plugin configuration
  grunt.initConfig({
    browserify: {
      js: {'../dist/app.js': ['./src/js/scripts.js']},
      options: {
        transform: ['hbsfy']}
    },
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
        tasks: ['browserify','jshint']
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
    },
    hbs: {
      files: ['../templates/**/*.hbs'],
      tasks: ['browserify']
    }
  });
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['browserify','sass','watch']);
};
