var gulp = require('gulp');
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('html', function() {
  gulp.src('./resources/assets/*.php')
      .pipe(gulp.dest('./resources/views'));
});

gulp.task('sass', function() {
  gulp.src('./resources/assets/sass/*.scss')
      .pipe(plumber())
      .pipe(sass({outputStyle: 'expanded'}))
      .pipe(autoprefixer())
      .pipe(gulp.dest('./public/css'));
});

gulp.task('js', function() {
  gulp.src('./resouces/assets/js/*.js')
      .pipe(concat('all.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest('./public/js'));
});

gulp.task('img', function() {
  gulp.src('./resources/assets/img/*.jpg')
      .pipe(imagemin())
      .pipe(gulp.dest('./public/img'));
});

gulp.task('watch', function() {
  gulp.watch('./resources/assets/sass/*.scss', ['sass'])
});

gulp.task('default', ['html', 'sass', 'js', 'img', 'watch']);