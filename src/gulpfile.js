/* global gulp, connect, browserify  */

/**
 * Gulp Modules
 */
// general
const gulp = require('gulp')
const gutil = require('gulp-util')
const connect = require('gulp-connect')
const rename = require('gulp-rename')
const cp = require('child_process')
// sass
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
// javascript
const uglify = require('gulp-uglify')
const babelify = require('babelify')
const browserify = require('browserify')
const source = require('vinyl-source-stream')
const buffer = require('vinyl-buffer')

/**
 * Sources
 */

const sassFile = ['./scss/**/*.scss']
const htmlFiles = ['./templates/**/*.html']
const jsFile = ['./js/app.js']
const mdFiles = ['../**/*.md']
const outputDir = '../'

/**
 * Server (Gulp Connect)
 */
gulp.task('server', () => {
  connect.server({
    root: '../_site',
    livereload: true
  })
})

/**
 * Deafult
 */
gulp.task('default', ['js', 'sass', 'build', 'watch', 'server'])

/**
 * Dev Watchers
 */
gulp.task('watch', () => {
  // make sure to watch _includes, _layouts
  gulp.watch([jsFile], ['js', 'reload'])
  gulp.watch(sassFile, ['sass', 'reload'])
  gulp.watch(htmlFiles, ['reload'])
  gulp.watch(mdFiles, ['reload'])
})

/**
 * Reload Gulp Connect
 */
gulp.task('reload', ['build'], function () {
  gulp.src(sassFile)
    .pipe(connect.reload())
})

/**
 * Jekyll Build
 */
gulp.task('build', () => {
  cp.spawn('npm', ['start'])
})

/**
 * Javascript
 */
gulp.task('js', () => {
  browserify({
    entries: jsFile,
    debug: true
  })
    .transform('babelify', {
      presets: ['es2015']
    })
    .bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(rename('bundle.js'))
    .pipe(gulp.dest(outputDir))
    .pipe(connect.reload())
})

/**
 * √ CSS / SASS (Dev)
 */
gulp.task('sass', () => {
  gulp.src(sassFile)
    // .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .on('error', gutil.log)
    .pipe(autoprefixer({
      browsers: ['last 5 versions'],
      cascade: false
    }))
    // .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(outputDir))
    .pipe(connect.reload())
})
