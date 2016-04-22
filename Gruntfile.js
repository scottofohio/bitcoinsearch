module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: '\n'
            },
            dist: {
                files: [{
                    src: ['assets/js/custom/_*.js',
                        'assets/js/custom/*.js'],
                    dest: 'assets/js/app.js'
                }, {
                    src: ['assets/js/lib/*.js'],
                    dest: 'assets/js/lib.js'
                }],
            },
        },
        uglify: {
            min: {
                files: {
                    'assets/js/app.js': ['assets/js/app.js']
                }
            }
        },
        sass: {
              // Sass development options
              dev: {
                options: {
                  outputStyle: 'expanded',
                  sourceMap: true,
                },
                files: {
                  'assets/css/app.css': 'assets/scss/app.scss'
                }
              },
              // Sass distribution options
              dist: {
                options: {
                  style: 'compressed'
                },
                files: {
                  'assets/css/app.css': 'assets/scss/app.scss'
                }
              }
            },
        jshint: {
            options: {
                // other settings...
                // ENVIRONMENTS
                // "browser": true, // Is in most configs by default
                "node": true,
                "expr": true,
                "globals": {
                    "$": true,
                    "jquery": true,
                    "angular": false
                    // other explicit global names to exclude
                },
            },
            files: ['assets/js/app.js']
        },
        // Uncomment if the css file is too big for IE9
        csssplit: {
            dist: {
                src: ['assets/css/app.css'],
                dest: 'assets/css/app_ie.css',
                options: {
                    suffix: '_'
                }
            },
        },
        watch: {
            options: {
                livereload: true
            },
            scripts: {
                files: ['assets/js/**/*.js'],
                // tasks: ['concat']
                tasks: ['concat', 'jshint']
            },
            sass: {
                files: ['assets/scss/*.scss', 'assets/scss/**/*.scss'],
                tasks: ['sass:dev'],
                options: {
                    outputStyle: 'expanded',
                    sourceMap: true
                }
            },
        },        
    });

    // Load tasks
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-csssplit'); // FOR IE 9

    // Default task(s).
    grunt.registerTask('prod', ['concat', 'uglify', 'sass']);
    grunt.registerTask('dev', ['concat', 'jshint', 'sass:dev', 'watch']);
    grunt.registerTask('default', function(arg) {
        var msg = 'Running default grunt task...';
        grunt.log.writeln(msg['yellow'].bold);
        grunt.log.writeln('\nYou can use "grunt debug" for development mode (sourcemaps, non-uglified, etc..)'['white'].white);
        grunt.task.run('prod');
    });
    grunt.registerTask('debug', function(arg) {
        var msg = 'Running debug/dev grunt task...';
        grunt.log.writeln(msg['yellow'].bold);
        grunt.task.run('dev');
    });

};
