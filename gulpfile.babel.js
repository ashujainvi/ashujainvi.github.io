'use strict';

//  IMPORTS 
import gulp from 'gulp';
import conf from './gulpfile.conf.js';
import babel from 'gulp-babel';

// CONSTANTS
const browserSync = require('browser-sync');

// PATHS
const PATHS = conf.paths;

// FILES PIPE TASKS
const tmpHtml = ()  => { return gulp.src(PATHS.srcHTML).pipe(gulp.dest(PATHS.dist));}
const tmpCss = ()  => { return gulp.src(PATHS.srcCSS).pipe(gulp.dest(PATHS.distCSS));}
const tmpImg = ()  => { return gulp.src(PATHS.srcImg).pipe(gulp.dest(PATHS.distImg));}

const tmpJs = ()  => { 
	return gulp.src(PATHS.srcJS)
		.pipe(babel({presets:['env']}))
		.pipe(gulp.dest(PATHS.distJS));
}

// SERVE TASK
const browserSyncInit = () => { 
	return browserSync.init({
    server: PATHS.dist,
    port: 3000
  }); 
};

// WATCH TASKS 
const reloadApp = () => {
	return tmpHtml()
		.pipe(browserSync.stream());
}

gulp.task('reload-app', reloadApp);

const watch = () => {
	gulp.watch(PATHS.srcHTML, gulp.series('reload-app'));
}

// ==========
// GULP TASKS
// ==========

// BUILD
gulp.task('tmpHtml', tmpHtml);
gulp.task('tmpJs', tmpJs);
gulp.task('tmpCss', tmpCss);
gulp.task('tmpImg', tmpImg);


// SERVE
gulp.task('copy', gulp.parallel('tmpHtml', 'tmpCss', 'tmpImg'));
gulp.task('watch', watch);
gulp.task('serve-only', (done) => {
	browserSyncInit();
	done();
});
gulp.task('serve', gulp.series('copy', 'serve-only', 'watch'));

