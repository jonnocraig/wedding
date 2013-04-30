module.exports = function( grunt ) {
  'use strict';

grunt.initConfig({

  cssmin: {
    combine: {
      files: {
        'public/css/main.min.css': ['public/css/bootstrap.min.css', 'public/css/bootstrap-responsive.min.css', 'public/css/main.css']
      }
    }
  },
  concat: {
    options: {
      separator: ''
    },
    dist: {
      src: ['public/js/jquery.min.js', 'public/js/jquery.fitvids.min.js', 'public/js/mainJs.min.js'],
      dest: 'public/js/main.min.js'
    }
  },

  uglify: {
    my_target: {
      files: {
        'public/js/mainJs.min.js': ['public/js/app.js']
      }
    }
  },

  compass: {
    dev: {
      options: {
        sassDir: 'public/sass/',
        cssDir: 'public/css/',
        imagesDir: 'public/img/',
        environment: 'development',
        outputStyle: 'compact',
        relativeAssets: true,
        debugInfo: true,
        force: true
      }
    },

    prod: {
      options: {
        sassDir: 'public/sass/',
        cssDir: 'public/css/',
        imagesDir: 'public/img',
        environment: 'production',
        outputStyle: 'compressed',
        relativeAssets: true,
        force: true
      }
    }
  },

  watch: {
    styles: {
      files: ['public/sass/*.scss'],
      tasks: ['compass:dev']
    }
  }

});

grunt.registerTask('default', 'compass:prod');



grunt.registerTask('compress', ['compass:prod', 'uglify', 'concat', 'cssmin']);

grunt.loadNpmTasks('grunt-contrib-compass');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-cssmin');

};