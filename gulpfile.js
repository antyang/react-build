var gulp = require('gulp');						// skeleton of build process
var gutil = require('gulp-util');				// responsible consolelog output of build process
var source = require('vinyl-source-stream');	// handling text files from one to another
var browserify = require('browserify');		// responsible for load order
var watchify = require('watchify');				// watches if file changes re-run gulp build
var reactify = require('reactify');				// works with browserify to handle converting jsx to js

gulp.task('default', function(){
	//bundler - responsible for running browserify on our code
	var bundler = watchify(browserify({
		entries: ['./src/app.jsx'],
		transform: [reactify],
		extensions: ['.jsx'],
		debug: true,
		cache: {},
		packageCache: {},
		fullPaths: true
	}));
	function build(file){
		if(file)gutil.log('Recompiling ' + file);
			return bundler
			.bundle()
			.on('error', gutil.log.bind(gutil, 'Browserify error'))
			.pipe(source('main.js'))
			.pipe(gulp.dest('./'));
	}
	build();
	bundler.on('update', build);
});