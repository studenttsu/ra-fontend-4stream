const { src, dest, series, watch, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const del = require('del');
const browserSync = require('browser-sync').create();

function buildSass() {
    return src('src/scss/**/*.scss')
        .pipe(sass({ includePaths: ['./node_modules'] }).on('error', sass.logError))
        .pipe(dest('src/css'))
        .pipe(dest('dist/css'))
        .pipe(browserSync.stream());
}

// Таск работы с html файлами
function buildHtml() {
    return src('src/**/*.html')
        .pipe(dest('dist'))
        .pipe(browserSync.stream());;
}

// Таск копирования статичных файлов
function copy() {
    return src(['src/images/**/*.*'], { base: 'src' })
        .pipe(dest('dist'))
        .pipe(browserSync.stream());;
}

// Таск очистки dist
function cleanDist() {
    return del('dist');
}

// Таск отслеживания изменения файлов
function serve() {
    watch('src/scss/**/*.scss', buildSass);
    watch('src/**/*.html', buildHtml);
}

// Создание дев-сервера
function createDevServer() {
    browserSync.init({
        server: 'src',
        notify: false
    });
}

exports.build = series(cleanDist, buildSass, buildHtml, copy);
exports.default = series(buildSass, parallel(createDevServer, serve));