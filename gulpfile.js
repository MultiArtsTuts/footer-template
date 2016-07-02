var gulp = require("gulp"),//http://gulpjs.com/
	util = require("gulp-util"),//https://github.com/gulpjs/gulp-util
	sass = require("gulp-sass"),//https://www.npmjs.org/package/gulp-sass
	autoprefixer = require('gulp-autoprefixer'),//https://www.npmjs.org/package/gulp-autoprefixer
	minifycss = require('gulp-minify-css'),//https://www.npmjs.org/package/gulp-minify-css
	rename = require('gulp-rename'),//https://www.npmjs.org/package/gulp-rename
	log = util.log;

// Dark Theme resource
var darkScss = ['dark/resources/assets/footer-dark.scss'];

// Light Theme resource
var lightScss = ['light/resources/assets/footer-light.scss'];

// Blue Theme resource
var blueScss = ['blue/resources/assets/footer-blue.scss'];

// Task Dark
gulp.task("dark", function(){
log("Generate CSS files " + (new Date()).toString());
gulp.src(darkScss)
	.pipe(sass({ style: 'expanded' }))
	.pipe(autoprefixer("last 3 version","safari 5", "ie 8", "ie 9"))
	.pipe(gulp.dest("dark/css"))
	.pipe(rename({suffix: '.min'}))
	.pipe(minifycss())
	.pipe(gulp.dest('dark/css'));
});

// Task Light
gulp.task("light", function(){
log("Generate CSS files " + (new Date()).toString());
gulp.src(lightScss)
	.pipe(sass({ style: 'expanded' }))
	.pipe(autoprefixer("last 3 version","safari 5", "ie 8", "ie 9"))
	.pipe(gulp.dest("light/css"))
	.pipe(rename({suffix: '.min'}))
	.pipe(minifycss())
	.pipe(gulp.dest('light/css'));
});

// Task Blue
gulp.task("blue", function(){
log("Generate CSS files " + (new Date()).toString());
gulp.src(blueScss)
	.pipe(sass({ style: 'expanded' }))
	.pipe(autoprefixer("last 3 version","safari 5", "ie 8", "ie 9"))
	.pipe(gulp.dest("blue/css"))
	.pipe(rename({suffix: '.min'}))
	.pipe(minifycss())
	.pipe(gulp.dest('blue/css'));
});

gulp.task("watch", function(){
	log("Watching scss files for modifications");
	gulp.watch(darkScss, ["dark"]);
});