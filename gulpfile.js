// imports

const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const browserSync = require('browser-sync');
const reload = browserSync.reload;
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const plumber = require('gulp-plumber');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const gulpIf = require('gulp-if');
const cleanCSS = require('gulp-clean-css');
const browserify = require('gulp-browserify');

// paths

const sassSources = './resources/sass/style.sass';
const jsSources = './resources/scripts/*.js';
const outputDir = './app/public';


// env
let env = 'development'; // change to production in order to run gulp in production mode

// error handler

const onError = function (err) {
    console.log(err);
    this.emit('end');
};

/*
   gulp tasks
*/


// browserSync
gulp.task('browser-sync', ['nodemon'], function() {
  browserSync({
    proxy: 'localhost:3000',  // local node app address
    port: 4200,  // use *different* port than above
    notify: true,
    watch: ['app/server.js',]
  });
});


// nodemon
gulp.task('nodemon', function (cb) {
  var called = false;
  return nodemon({
    script: 'app/server.js',
    ignore: [
      'gulpfile.js',
      'node_modules/'
    ]
  })
  .on('start', function () {
    if (!called) {
      called = true;
      cb();
    }
  })
  .on('restart', function () {
    setTimeout(function () {
      reload({ stream: false });
  }, 1000);
  });
});

//JS
gulp.task('js', function () {
   return gulp.src(jsSources)
            .pipe(plumber({
                errorHandler: onError
            }))
            .pipe(sourcemaps.init())
            .pipe(concat('main.js'))
            .pipe(browserify())
            .pipe(gulpIf(env === 'production', uglify()))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(outputDir + '/js'))
            .pipe(browserSync.stream());
});

//SASS TO CSS
gulp.task('sass', function () {
    return gulp.src(sassSources)
            .pipe(plumber({
              errorHandler: onError
            }))
            .pipe(sourcemaps.init({loadMaps: true}))
            .pipe(sass())
            .pipe(autoprefixer())
            .pipe(sourcemaps.write())
            .pipe(gulpIf(env === 'production', cleanCSS({compatibility: 'ie8'})))
            .pipe(gulp.dest(outputDir + '/css'))
            .pipe(browserSync.stream());
});

gulp.task('watch', function () {
    gulp.watch(jsSources, ['js']);
    gulp.watch('resources/sass/**/*.sass', ['sass']);
    gulp.watch('resources/sass/**/*.scss', ['sass']);
    gulp.watch('app/**/*.ejs').on('change', browserSync.reload);

});

gulp.task('default', ['browser-sync', 'sass', 'js', 'watch'], function () {

});
