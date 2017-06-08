var prefix = require('gulp-autoprefixer')
var cp = require('child_process')
const gulp = require('gulp')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const sourcemaps = require('gulp-sourcemaps')
const gutil = require('gulp-util')
const htmlmin = require('gulp-htmlmin')
const imagemin = require('gulp-imagemin')
const connect = require('gulp-connect')
const browserify = require('browserify')
const babelify = require('babelify')
const source = require('vinyl-source-stream')

var jekyll = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll'
var messages = {
  jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
}
var sassSources = [
  'css/puddletown/puddletown.scss',
  'css/articles/articles.scss',
  'css/resume/resume.scss'
]
/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', function (done) {
  browserSync.notify(messages.jekyllBuild)
  return cp.spawn(jekyll, ['build'], {
      stdio: 'inherit'
    })
    .on('close', done)
})

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
  browserSync.reload()
})

/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task('browser-sync', ['sass', 'jekyll-build'], function () {
  browserSync({
    server: {
      baseDir: '_site'
    }
  })
})

/**
 * Compile files from _scss into both _site/css (for live injecting) and site (for future jekyll builds)
 */
gulp.task('sass', function () {
  return gulp.src(sassSources)
    .pipe(sass({
      includePaths: ['scss'],
      onError: browserSync.notify,
      outputStyle: 'compressed'
    }))
    .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {
      cascade: true
    }))
    .pipe(gulp.dest('_site/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
    .pipe(gulp.dest('css'))
})

/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function () {
  gulp.watch('**/*.scss', ['sass'])
  gulp.watch(['**/*.html', '_layouts/*.html', '**/*.md', '!node_modules/**/*.html'], ['jekyll-rebuild'])
})

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['browser-sync', 'watch'])
