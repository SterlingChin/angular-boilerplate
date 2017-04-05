//1. Make gulpfile
//2. npm i all dependencies
//3. check all folder paths used in gulpfile
//4. Update index.html
//5. Run gulp watch

const gulp = require('gulp');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const sass = require('gulp-sass');

// Instructions for how task will run.
gulp.task('concat', function(){
  // gulp.src(['./js/services/mainService.js', './js/adventurerCard.js', './js/'])       Bad way
  // Use a wildcard instead. Wildcard = *
  gulp.src(['./js/app.js', './js/**/*.js'])
  .pipe(babel({
    presets: ['es2015']
  }))
  .pipe(concat('all.js'))
  .pipe(gulp.dest('./dist'));
});


// Compile scss into css files
gulp.task('sass', function() {
  gulp.src([
    './styles/reset.css', 
    './views/**/*{.scss,.css}',
    './styles/*.scss'
    ])
  .pipe(sass().on('error', sass.logError))
  .pipe(concat('all.css'))
  .pipe(gulp.dest('./dist'));
});


gulp.task('default', ['concat', 'sass']);


// Gulp watch
// takes two arguments: the file(s) to watch, and then the task to do if it notices a change.
gulp.watch(['./js/*.js','./js/**/*.js'], ['concat']);
gulp.watch(['./styles/*.css', './styles/*.scss', './views/**/*.css', './views/**/*.scss'], ['sass']);