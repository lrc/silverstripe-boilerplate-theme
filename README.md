This is a boilerplate theme for SilverStripe. It's designed to work in tandem with the [boilerplate SilverStripe 
repository](https://github.com/lrc/silverstripe-boilerplate) to provide a good starting point for development of new
projects.

## Dependencies
Most dependencies will be automatically installed using [Composer](http://getcomposer.org/).

In addition to dependencies managed by Composer, the development environment is expected to have the following libraries
available:  

- [Compass](http://compass-style.org/install/)
- [Grunt.js](http://gruntjs.com/) >= 0.4.0
-- [contrib-watch](https://github.com/gruntjs/grunt-contrib-watch)
-- [contrib-uglify](https://github.com/gruntjs/grunt-contrib-uglify)
-- [contrib-compass](https://github.com/gruntjs/grunt-contrib-compass)

## Setup

After the Composer install is complete, there are a couple of minor setup steps required. 

### Install Grunt modules locally using [NPM](https://github.com/gruntjs/grunt-contrib-watch)

The repository has a `package.json` file which defines the NPM modules which are required. Assuming you have NPM and 
Grunt >= 0.4.0 installed as recommended, it's simply a matter of running `npm install` in the theme directory.

### Watch

While actively developing on the project you'll want to have Grunt watching the directory for changes to the SCSS and
JS files, so run `grunt watch` from the theme directory.

