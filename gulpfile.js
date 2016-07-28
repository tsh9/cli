var gulp = require("gulp"),
    sass = require("gulp-sass"),
    autoprefixer = require("gulp-autoprefixer"),
    sourcemaps = require("gulp-sourcemaps"),
    browserSync = require("browser-sync"),
    reload = browserSync.reload;

var sassOptions = {
  errLogToConsole: true,
  outputStyle: "compressed"
};

gulp.task("html", function() {
  return gulp.src("*.html")
        .pipe(reload({stream: true}));
});

gulp.task("sass", function() {
  return gulp.src("scss/styles.scss")
        .pipe(sourcemaps.init())
        .pipe(autoprefixer({
          browsers: ['last 2 versions']
        }))
        .pipe(sass(sassOptions).on("error", sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("css"))
        .pipe(reload({stream: true}));
});

gulp.task("js", function() {
  return gulp.src("js/main.js")
        .pipe(reload({stream: true}));
});

gulp.task("browserSync", function() {
  browserSync.init({
    server: {
      baseDir: "."
    }
  });
});


gulp.task("watch", ["browserSync"], function() {
  gulp.watch("scss/styles.scss", ["sass"]);
  gulp.watch("*.html", ["html"]);
  gulp.watch("js/main.js", ["js"]);
});
