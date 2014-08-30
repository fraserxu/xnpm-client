'use strict';

var gulp = require('gulp');
var browserify = require('gulp-browserify');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var bourbon = require('node-bourbon').includePaths;

var css = [
  './src/scss/main.scss',
  './node_modules/chartist/libdist/chartist.min.css'
]

gulp.task('scripts', function() {
  return gulp.src('./src/js/app.js', {read: false})
    .pipe(browserify({
      insertGlobals : false,
      transform: ['reactify', 'cssify'],
      extensions: ['.jsx']
    }))
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('styles', function () {
  return gulp.src(css)
    .pipe(sass({
      includePaths: ['./src/scss'].concat(bourbon)
    }))
    .pipe(concat('all.css'))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('watch', function() {
  gulp.watch('src/**/*.*', ['default']);
});

gulp.task('default', ['styles', 'scripts']);
