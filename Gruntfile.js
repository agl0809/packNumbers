module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            all: ['src/**/*.js', 'spec/**/*.js']
        },

        jasmine: {
            src: 'src/**/*.js',
            options: {
                specs: 'spec/**/*.spec.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.registerTask('test', ['jshint', 'jasmine']);
};
