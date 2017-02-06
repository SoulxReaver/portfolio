var gulp = require('gulp');
var csslint = require('gulp-csslint');
var csscomb = require('gulp-csscomb');

gulp.task('default', ['csslint', 'cssStyles']);

gulp.task('csslint', function() {
  gulp.src('css/*.css')
    .pipe(csslint())
    .pipe(csslint.formatter());
});

gulp.task('cssStyles', function() {
  return gulp.src('css/*.css')
    .pipe(csscomb())
    .pipe(gulp.dest('./build/css'));
});