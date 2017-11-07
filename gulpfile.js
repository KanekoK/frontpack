var gulp = require('gulp');
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function() {
  gulp.src('./resources/sass/*.scss')
      .pipe(plumber())
      .pipe(sass({outputStyle: 'expanded'}))
      .pipe(autoprefixer())
      .pipe(gulp.dest('./css'));
});

gulp.task('js', function() {
  gulp.src('./resources/js/*.js')
      .pipe(concat('all.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest('./js'));
});

gulp.task('img', function() {
  gulp.src('./resources/img/*.jpg')
      .pipe(imagemin())
      .pipe(gulp.dest('./img'));
});

gulp.task('watch', function() {
  gulp.watch('./sass/*.scss', ['sass'])
});

gulp.task('default', ['sass', 'js', 'img', 'watch']);
