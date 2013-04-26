/*
 * Setup options for grunt to work with.
 */
module.exports = function(grunt) {
	// Project configuration.
	grunt.initConfig({
		uglify: {
			library: {
				options: {
					preserveComments: 'some'
				},
				files: {
					'javascript/html5shiv.js': ['src/javascript/lib/html5shiv/src/html5shiv-printshiv.js'],
					'javascript/require.js': ['src/javascript/require-config.js', 'src/javascript/lib/require/require.js'],
					'javascript/jquery.js': ['src/javascript/lib/jquery/jquery-1.9.1.js'],
					'javascript/jquery.autocomplete.js': ['src/javascript/lib/jquery-autocomplete/dist/jquery.autocomplete.js'],
					'javascript/forms.js': ['src/javascript/lib/jquery-validation/jquery.validate.js']
				}
			},
			project: {
				options: {
					preserveComments: 'some'
				},
				files: {
					'javascript/main.js': ['src/javascript/main.js']
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
			scriptsLibrary: {
				files: ['src/javascript/lib/**/*.js'],
				tasks: 'uglify:library'
			},
			scriptsProject: {
				files: ['src/javascript/*.js', 'src/javascript/**/*.js', '!src/javascript/lib/**'],
				tasks: 'uglify:project'
			},
			styles: {
				files: ['src/scss/*.scss', 'src/scss/**/*.scss'],
				tasks: 'compass'
			}
		}
	});
	
	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-watch');

};
