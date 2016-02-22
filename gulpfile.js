var gulp    = require('gulp');
var watch = require('gulp-watch');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var uglify  = require('gulp-uglify');
var rename  = require('gulp-rename');
var clean  = require('gulp-clean');
var plumber = require('gulp-plumber');
var batch = require('gulp-batch');
var sourcemaps = require('gulp-sourcemaps');
var gzip = require('gulp-gzip');
var notify = require("gulp-notify");

gulp.task('default', ['styles', 'js'], function() {

});

gulp.task('js', ['clean-js'], function() {
    return gulp.src('es6/*.js')
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(uglify({
            mangle: false
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(rename('demo.min.js'))
        .pipe(gulp.dest('./js/'))
        .pipe(notify("Javascript Babelified"));
});

gulp.task('styles', ['clean-css'], function() {
    gulp.src('sass/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cssnano())
        .pipe(rename('demo.min.css'))
        .pipe(gulp.dest('./css/'))
        .pipe(notify("SASS Compiled"));
});

gulp.task('clean-js', function() {
    return gulp.src('./dist/*.js')
        .pipe(clean({force: true}));
});

gulp.task('clean-css', function() {
    return gulp.src('./dist/*.css')
        .pipe(clean({force: true}));
});

gulp.task('watch', function () {
    watch('./sass/**/*', batch(function (events, done) {
        gulp.start('styles', done);
    }));
    watch('./es6/*.js', batch(function (events, done) {
        gulp.start('js', done);
    }));
});

gulp.task('compress-js', function() {
    gulp.src('./dist/*.js')
    .pipe(gzip())
    .pipe(gulp.dest('./dist/'));
});

gulp.task('compress-css', function() {
    gulp.src('./dist/*.css')
    .pipe(gzip())
    .pipe(gulp.dest('./dist/'));
});
