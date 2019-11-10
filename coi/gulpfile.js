const gulp = require('gulp');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');
const imgCompress = require('imagemin-jpeg-recompress');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const del = require('del');
const browserSync = require('browser-sync').create();
const { series, parallel } = require('gulp');

const cssFiles = [
   './app/css/aos.css',
   './app/css/fonts.css',
   './app/css/bootstrap-grid.css',
   './app/css/main.css'   
]

const scssFiles = [
   './app/scss/fonts.scss',
   './app/scss/main.scss'   
]

const jsFiles = [
   './app/js/jquery.js',
   './app/js/aos.js',  
   './app/js/menu.js',
   './app/js/validate.js'
]

function styles() {
   return gulp.src(cssFiles)
   .pipe(concat('style.css'))
   .pipe(autoprefixer({
      overrideBrowserslist: ['last 2 versions'],
      cascade: false
   }))
   .pipe(cleanCSS({
      level: 2
   }))
   .pipe(gulp.dest('./build/css'))
   .pipe(browserSync.stream());
}

function scripts() {
   return gulp.src(jsFiles)
   .pipe(concat('script.js'))
   .pipe(uglify({
      toplevel: true
   }))
   .pipe(gulp.dest('./build/js'))
   .pipe(browserSync.stream());
}

function img() {
   return gulp.src('app/img/*')
   .pipe(imagemin([
     imgCompress({
       loops: 4,
       min: 70,
       max: 80,
       quality: 'high'
     }),
     imagemin.gifsicle(),
     imagemin.optipng(),
     imagemin.svgo()
   ]))
   .pipe(gulp.dest('build/img'));
 }

function clean() {
   return del(['build/*'])
}

function watch() {
   browserSync.init({
      server: {
          baseDir: "./"
      }
  });
  gulp.watch('./app/scss/**/*.scss', styles)
  gulp.watch('./app/css/**/*.css', styles)
  gulp.watch('./app/js/**/*.js', scripts)
  gulp.watch("./*.html").on('change', browserSync.reload);
}

gulp.task('styles', styles);

gulp.task('scripts', scripts);

gulp.task('del', clean);

gulp.task('watch', watch);

gulp.task('build', gulp.series(clean, gulp.parallel(styles,scripts,img)));

gulp.task('dev', gulp.series('build','watch'));