/**
 * Gulp Modules
 */

/* global gulp, connect, browserify  */

// general
const gulp = require('gulp')
const gutil = require('gulp-util')
const connect = require('gulp-connect')
const rename = require('gulp-rename')

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

const sassFile = ['scss/style.scss']
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
 * Jekyll Build
 */
gulp.task('build', () => {

})

/**
 * Deafult
 */
// gulp.task('default', ['js', 'sass', 'watch', 'server'])

/**
 * Dev Watchers
 */
gulp.task('watch', () => {
  // make sure to watch _includes, _layouts
  gulp.watch([jsFile], ['js'])
  gulp.watch(htmlFiles, ['html'])
  gulp.watch(sassFile, ['sass'])
  gulp.watch(mdFiles, )
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
  // .pipe(connect.reload())
})
