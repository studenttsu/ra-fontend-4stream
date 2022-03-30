const { src, dest, series, watch, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const del = require('del');
const browserSync = require('browser-sync').create();
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const sourcemaps = require('gulp-sourcemaps');

const SRC_PATH = 'src';
const DIST_PATH = 'dist';

const PATHS = {
    scss: `${SRC_PATH}/scss/**/*.scss`,
    html: `${SRC_PATH}/**/*.html`,
    js: `${SRC_PATH}/js/index.js`,
    images: `${SRC_PATH}/images/**/*.*`
};

function buildSass() {
    return src(PATHS.scss)
        .pipe(sourcemaps.init())
        .pipe(sass({ includePaths: ['./node_modules'] }).on('error', sass.logError))
        .pipe(
            postcss([
                autoprefixer({
                    grid: true,
                    overrideBrowserslist: ['last 2 versions']
                }),
                cssnano()
            ])
        )
        .pipe(sourcemaps.write())
        .pipe(dest(`${SRC_PATH}/css`))
        .pipe(dest(`${DIST_PATH}/css`))
        .pipe(browserSync.stream());
}

// Таск работы с html файлами
function buildHtml() {
    return src('src/**/*.html')
        .pipe(dest(DIST_PATH))
        .pipe(browserSync.stream());
}

// Таск копирования статичных файлов
function copy() {
    return src([PATHS.images], { base: SRC_PATH  })
        .pipe(dest(DIST_PATH))
        .pipe(browserSync.stream());
}

// Таск очистки dist
function cleanDist() {
    return del(DIST_PATH);
}

// Таск отслеживания изменения файлов
function serve() {
    watch(PATHS.scss, buildSass);
    watch(PATHS.html, buildHtml);
}

// Создание дев-сервера
function createDevServer() {
    browserSync.init({
        server: SRC_PATH,
        notify: false
    });
}

exports.build = series(cleanDist, buildSass, buildHtml, copy);
exports.default = series(buildSass, parallel(createDevServer, serve));