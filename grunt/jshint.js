'use strict';

module.exports = function (grunt) {
    grunt.config.set('jshint', {
        options: {
            curly: true,
            eqeqeq: true,
            eqnull: true,
            immed: true,
            latedef: false,
            laxcomma: true,
            loopfunc: true,
            newcap: true,
            noarg: true,
            onevar: true,
            regexp: true,
            strict: true,
            sub: true,
            trailing: true,
            undef: true,
            yui: true,
            globals: {
                app: true,
                dust: true,
                exports: true,
                console: true,
                escape: true,
                App: true,
                describe: true,
                it: true,
                before: true,
                after: true,
                beforeEach: true
            }
        },
        server: {
            options: {
                node: true,
                strict: false
            },
            files: {
                src: ['{controllers,lib,models}/**/*.js', 'public/js/*.js', 'app.js', 'index.js', 'package.json']
            }
        },
        dev: {
            options: {
                node: true,
                strict: false
            },
            files: {
                src: ['grunt/**/*.js', 'test/**/*.js', 'samples/**/*.json', 'Gruntfile.js']
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-jshint');
};