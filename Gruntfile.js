'use strict';

module.exports = function (grunt) {
    grunt.initConfig({
        execute: {
            generic: {
                options: {
                    cwd: 'pdfjs',
                    args: ['generic']
                },
                src: ['pdfjs/make.js']
            }
        },
        uglify: {
            all: {
                files: {
                    'dist/pdf.js': [ 'pdfjs/build/pdf.js' ],
                    'dist/pdf.worker.js': [ 'pdfjs/build/pdf.worker.js' ],
                    'dist/compatibility.js': [ 'pdfjs/build/generic/web/compatibility.js' ]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-execute');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('build', [
        'execute',
        'uglify'
    ]);

    grunt.registerTask('default', [
        'build'
    ]);
};
