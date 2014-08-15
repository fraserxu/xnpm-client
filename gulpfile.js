'use strict';

var gulp = require('gulp');
var browserify = require('gulp-browserify');
var sass = require('gulp-sass');
var bourbon = require('node-bourbon').includePaths;

gulp.task('scripts', function() {
  return gulp.src('./src/js/app.js', {read: false})
    .pipe(browserify({
      insertGlobals : false,
      transform: ['reactify'],
      extensions: ['.jsx']
    }))
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('styles', function () {
  return gulp.src('./src/scss/main.scss')
    .pipe(sass({
      includePaths: ['./src/scss'].concat(bourbon)
    }))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('build', ['styles', 'scripts']);
