module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      all: {
        src: [
          'Gruntfile.js',
          'app.js',
          'config/config.js',
          'app/*.js',
          'tasks/*.js'
        ]
      }
    },
    cssmin: {
      options: {
        roundingPrecision: -1,
        sourceMap: true,
        sourceMapInlineSources: true
      },
      all: {
        files: {
          'public/css/all.min.css': [
            'public/css/html5-reset.css',
            'public/css/fonts.css',
            'public/css/main.css'
          ]
        }
      }
    },
    'goog-webfont-dl': {
      opensans: {
        options: {
          ttf: true,
          eot: true,
          woff: true,
          woff2: true,
          svg: true,
          fontname: 'Open Sans',
          fontstyles: '400,700,400italic,700italic',
          fontdest: 'public/fonts',
          cssdest: 'public/css/fonts.css',
          cssprefix: '../fonts'
        },
      }
    },
    watch: {
      js: {
        files: [
          'Gruntfile.js',
          'app.js',
          'config/config.js',
          'app/*.js',
          'tasks/*.js'
        ],
        tasks: 'jshint'
      },
      css: {
        files: [
          'public/css/html5-reset.css',
          'public/css/fonts.css',
          'public/css/main.css'
        ],
        tasks: 'cssmin',
        options: {
          'atBegin': true
        }
      },
      grunt: {
        files: 'Gruntfile.js',
        options: {
          reload: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-goog-webfont-dl');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('font-conditional', function() {
    var path = grunt.config.get('goog-webfont-dl.opensans.options.cssdest');
    if (!grunt.file.isFile(path)) {
      grunt.task.run('goog-webfont-dl');
    }
  });

  grunt.registerTask('default', ['jshint', 'font-conditional', 'cssmin']);
};
