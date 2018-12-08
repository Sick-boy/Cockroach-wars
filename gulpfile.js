var gulp         = require('gulp'),
    concat       = require('gulp-concat'),
    sass         = require('gulp-sass'),
    uglify       = require('gulp-uglifyjs'),
	  cssnano      = require('gulp-cssnano'),
	  rename       = require('gulp-rename'),
  	del          = require('del'),
  	imagemin     = require('gulp-imagemin'),
  	pngquant     = require('imagemin-pngquant'),
  	cache        = require('gulp-cache'),
  	autoprefixer = require('gulp-autoprefixer');

const { parallel, series } = require('gulp');

sass.compiler = require('node-sass');

function sass(cb) {
  return gulp.src('./css/sass/**/*.scss')  //make sure about path
             .pipe(sass().on('error', sass.logError))
             .pipe(autoprefixer(['last 2 versions', 'ie 8', 'ie 7'], { cascade: true }))
             .pipe(gulp.dest('./css/style.css'));  //make sure about path
cb();
}




//_________

function defaultTask(arg) {
arg();
}

exports.sass = sass;
exports.default = defaultTask
