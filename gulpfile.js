'use strict';

var fs = require('fs');
var gulp = require('gulp');
var git = require('gulp-git');
var del = require('del');
var bower = require('bower');
var shell = require('gulp-shell');
var runSequence = require('run-sequence');

var paths = {};
var widgets = [
];

gulp.task( 'clean', function (cb) {
	// clear all directory
	del(['**', '!node_modules/**', '!gulpfile.js', '!package.json']);

	// bower cache clean
	bower.commands.cache.clean();

	// npm cache clean
	// shell('npm cache clean');
	return cb();
});

gulp.task( 'widget-utils', function (cb) {
	git.clone('git@github.com:Vixlet/bower-widget-utils.git', function (err) {
		// console.log(process.cwd());
		process.chdir('bower-widget-utils');
		console.log('cd ' + process.cwd());
		bower.commands
		.install()
		.on('end', function (installed) {
			console.log( 'widget-utils: bower components installed' );
			cb();
		});
		// bower.commands
		// .version( 'minor', {
		// 	message: 'version message'
		// })
		// .on('end', function (bumped) {
		// 	console.log( 'widget-utils: version minor');
		// });
	});

		// bower version minor


		// git push --tags
});

gulp.task('version',function(cb){
	bower.commands
	.version( 'minor', {
		message: 'version message'
	})
	.on('end', function (bumped) {
		console.log( 'widget-utils: version minor');
		cb();
	});
});

gulp.task( 'default', function (cb) {
	runSequence(
		'clean',
		'widget-utils',
		'version',
		cb);
	

	// for bower angular vixlet

		// bower uninstall --save bower-widget-utils

		// bower install --save git@github.com:Vixlet/bower-widget-utils.git

		// git commit -am "update widget util"

		// git push --tags

	// for each widgets..

		// npm install

		// bower uninstall --save bower-angular-vixlet

		// bower install --save git@github.com:Vixlet/bower-angular-vixlet.git

		// bower install

		// grunt build

		// npm version major/minor/patch

		// git commit

		// git push --tags

		// npm publish

	// manager
		// npm install

		// gulp link

		// npm version major/minor/patch

		// git commit

		// git push --tags

		// npm publish

	// sdk
		// npm install

		// gulp link

		// npm version major/minor/patch

		// git commit

		// git push 00tags

		// npm publish
});