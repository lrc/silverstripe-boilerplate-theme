/*
 * Setup options for grunt to work with.
 */
module.exports = function(grunt) {
	// Project configuration.
	grunt.initConfig({
		uglify: {
			production: {
				options: {
					preserveComments: 'some',
					banner: '/*! Copyright (c) <%= grunt.template.today("yyyy") %> Left, Right & Centre */'
				},
				files: {
					'javascript/main.js': ['src/javascript/main.js'],
					'javascript/forms.js': ['src/javascript/jquery.validate.js'],
					'javascript/require-jquery.js': ['src/javascript/require-jquery.js']
				}
			}
		},
		compass: {
			production: {
				options: {
					sassDir: 'src/scss',
					cssDir: 'css',
					environment: 'production'
				}
			},
			dev: {
				options: {
					sassDir: 'src/scss',
					cssDir: 'styleguide',
					outputStyle: 'nested',
					noLineComments: true
				}
			}
		},
		watch: {
			scripts: {
				files: ['src/**/*.js'],
				tasks: 'uglify'
			},
			styles: {
				files: ['src/**/*.scss'],
				tasks: 'compass'
			}
		}
	});
	
	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-watch');

};
