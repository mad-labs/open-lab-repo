"use strict";

import gulp from "gulp";
import browserify from "browserify";
import source from "vinyl-source-stream";

gulp.task("main", () => {
  return browserify("src/app.js")
  .transform("babelify")
  .bundle()
  .pipe(source("bundle.js"))
  .pipe(gulp.dest("dist"));
});

gulp.task("test", () => {
  return browserify("spec/addressBookAppSpec.js")
  .transform("babelify")
  .bundle()
  .pipe(source("test-bundle.js"))
  .pipe(gulp.dest("test"));
});

gulp.task("default", ["main", "test"]);
