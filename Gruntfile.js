'use strict';
module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				files: {
					'includes/resources/bootstrap/css/bootstrap.min.css' : 'includes/resources/bootstrap/css/custom.scss'
				},
				options : {
					style : 'compressed'
				}
			}
		},
		watch: {
			css: {
				files: 'includes/resources/bootstrap/css/*.scss',
				tasks: ['sass']
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask('default',['watch']);
}

