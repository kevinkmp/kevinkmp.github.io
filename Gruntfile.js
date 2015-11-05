/*jslint node: true */
'use strict';

var pkg = require('./package.json');

//Using exclusion patterns slows down Grunt significantly
//instead of creating a set of patterns like '**/*.js' and '!**/node_modules/**'
//this method is used to create a set of inclusive patterns for all subdirectories
//skipping node_modules, bower_components, dist, and any .dirs
//This enables users to create any directory structure they desire.
var createFolderGlobs = function(fileTypePatterns) {
  fileTypePatterns = Array.isArray(fileTypePatterns) ? fileTypePatterns : [fileTypePatterns];
  var ignore = ['node_modules','bower_components','dist','temp'];
  var fs = require('fs');
  return fs.readdirSync(process.cwd())
    .map(function(file){
      if (ignore.indexOf(file) !== -1 ||
          file.indexOf('.') === 0 ||
          !fs.lstatSync(file).isDirectory()) {
        return null;
      } else {
        return fileTypePatterns.map(function(pattern) {
          return file + '/**/' + pattern;
        });
      }
    })
    .filter(function(patterns){
      return patterns;
    })
    .concat(fileTypePatterns);
};

module.exports = function (grunt) {

  // load all grunt tasks
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    connect: {
      main: {
        options: {
          port: 9001,
          hostname: 'localhost',
          open: true
        }
      }
    },
    watch: {
      main: {
        options: {
          livereload: true,
          livereloadOnError: false,
          spawn: false
        },
        files: [createFolderGlobs(['*.js','*.html']),'!_SpecRunner.html','!.grunt','app.css'],
        tasks: [] //all the tasks are run dynamically during the watch event handler
      },
      sass: {
        files: [createFolderGlobs(['*.scss'])],
        tasks: ['sass']
      },
      postcss: {
        files: ['app.css'],
        tasks: ['postcss']
      }
    },
    clean: {
      before:{
        src:['dist','temp']
      },
      after: {
        src:['temp']
      }
    },
    sass: {
      dist: {
        options: {
          sourceMap: true,
          outputStyle: 'expanded'
        },
        files: {
          'app.css': 'app.scss'
        }
      }
    },
    postcss: {
      options: {
        map: { inline: true },
        processors: [
          require('autoprefixer-core')(),
          require('cssgrace')
        ]
      },
      dist: {
        src: 'app.css'
      }
    },
    cssnano: {
      options: {
        sourcemap: true
      },
      dist: {
        files: {
          'dist/app.full.min.css': 'app.css'
        }
      }
    },
    ngtemplates: {
      main: {
        options: {
            module: pkg.name,
            htmlmin:'<%= htmlmin.main.options %>'
        },
        src: [createFolderGlobs('*.html'),'!index.html','!_SpecRunner.html'],
        dest: 'temp/templates.js'
      }
    },
    copy: {
      main: {
        files: [
          {
            src: [
              'slim/client/fonts/**/*',
              'bower_components/angular-ui-notification/dist/angular-ui-notification.min.css',
              'bower_components/ng-tags-input/ng-tags-input.min.css',
              'bower_components/html5shiv/dist/html5shiv.min.js',
              'bower_components/es5-shim/es5-shim.min.js',
              'bower_components/c3/c3.css',
              'images/**/*',
              'favicon.ico'
            ],
            dest: 'dist/',
            filter: 'isFile',
            expand: true
          }
        ]
      }
    },
    dom_munger:{
      read: {
        options: {
          read:[
            {selector:'script[data-concat!="false"]',attribute:'src',writeto:'appjs'},
            {selector:'link[rel="stylesheet"][data-concat!="false"]',attribute:'href',writeto:'appcss'}
          ]
        },
        src: 'index.html'
      },
      update: {
        options: {
          remove: ['script[data-remove!="false"]','link[data-remove!="false"]'],
          append: [
            {selector:'body',html:'<script src="app.full.min.js"></script>'},
            {selector:'head',html:'<link rel="stylesheet" href="app.full.min.css">'}
          ]
        },
        src:'index.html',
        dest: 'dist/index.html'
      }
    },
    /*cssmin: {
      main: {
        src:['temp/app.css','<%= dom_munger.data.appcss %>'],
        dest:'dist/app.full.min.css'
      }
    },*/
    concat: {
      main: {
        src: ['<%= dom_munger.data.appjs %>','<%= ngtemplates.main.dest %>'],
        dest: 'temp/app.full.js'
      }
    },
    ngAnnotate: {
      main: {
        src:'temp/app.full.js',
        dest: 'temp/app.full.js'
      }
    },
    uglify: {
      main: {
        src: 'temp/app.full.js',
        dest:'dist/app.full.min.js'
      }
    },
    htmlmin: {
      main: {
        options: {
          collapseBooleanAttributes: true,
          collapseWhitespace: true,
          removeAttributeQuotes: true,
          removeComments: true,
          removeEmptyAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true
        },
        files: {
          'dist/index.html': 'dist/index.html'
        }
      }
    },
    wiredep: {
      task: {
        src: ['index.html','app.scss']
      }
    }
  });

  grunt.registerTask('build',['wiredep','clean:before','sass:dist','dom_munger','ngtemplates','concat','ngAnnotate','uglify','copy','htmlmin','postcss','cssnano','clean:after']);
  grunt.registerTask('serve', ['wiredep','dom_munger:read','sass','connect','watch']);

  grunt.event.on('watch', function(action, filepath) {

    var tasksToRun = [];

    //if index.html changed, we need to reread the <script> tags
    if (filepath === 'index.html') {
      tasksToRun.push('dom_munger:read');
    }

    grunt.config('watch.main.tasks', tasksToRun);

  });

};
