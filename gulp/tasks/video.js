const gulp = require('gulp')

module.exports = function styles() {
  return gulp.src('src/video/*.*')
    .pipe(gulp.dest('docs/video'))
}

