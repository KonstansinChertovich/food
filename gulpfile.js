const gulp = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass')(require('sass'));
const rename = require("gulp-rename");
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const htmlmin = require('gulp-htmlmin');
const jsmin = require('gulp-jsmin');
// Static server
gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "dist"
        }
    });
    gulp.watch("src/*.html").on('change', browserSync.reload);
});

gulp.task('style', function() {
    return gulp.src("src/sass/**/*.+(sass|scss)")
            .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
            .pipe(rename({
                prefix: "",
                suffix: ".min",
            }))
            .pipe(autoprefixer({
                cascade: false
            }))
            .pipe(cleanCSS({compatibility: 'ie8'}))
            .pipe(gulp.dest("dist/css"))
            .pipe(browserSync.stream());
});

gulp.task('watch', function() {
    gulp.watch("src/sass/**/*.+(sass|scss|css)", gulp.parallel('style'));
    gulp.watch("src/*.html").on('change', gulp.parallel('html'));
    // gulp.watch("src/js/**/*.js").on('change', gulp.parallel('scripts'));
    gulp.watch("src/font/**/*").on('all', gulp.parallel('font'));
    gulp.watch("src/icons/**/*").on('all', gulp.parallel('icon'));
    gulp.watch("src/img/**/*").on('all', gulp.parallel('img'));
});

gulp.task('html', function() {
    return gulp.src("src/*.html")
            .pipe(htmlmin({ collapseWhitespace: true }))
            .pipe(gulp.dest('dist/'));
});

gulp.task('font', function() {
    return gulp.src("src/font/**/*")
            .pipe(gulp.dest('dist/font/'));
});

// gulp.task('scripts', function () {
//     return gulp.src("src/js/**/*.js")
//         .pipe(jsmin())
//         .pipe(rename({suffix: '.min'}))
//         .pipe(gulp.dest("dist/js"))
//         .pipe(browserSync.stream());
// });

gulp.task('icon', function() {
    return gulp.src("src/icons/**/*")
            .pipe(gulp.dest('dist/icons/'));
});

gulp.task('img', function() {
    return gulp.src("src/img/**/*")
            .pipe(imagemin())
            .pipe(gulp.dest('dist/img/'));
});

gulp.task('default', gulp.parallel('watch', 'server', 'style', 'font', 'icon', 'img', 'html'));