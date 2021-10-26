/// <binding AfterBuild='default' Clean='clean' />
/*
This file is the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/
var gulp = require("gulp");
var del = require("del");

/* Create an objects with a scripts array of all the filepaths and file-match patterns of source script files. */
var paths = {
    scripts: ["src/**/*.js", "src/**/*.ts", "src/**/*.map"],
};

/* Delete all files in wwwroot/dist. */
gulp.task("clean", function () {
    return del(["wwwroot/dist/**/*"]);
});

/* Find all files matching paths.scripts and copy them to the wwwroot/dist directory. */
gulp.task("default", function (done) {
    gulp.src(paths.scripts).pipe(gulp.dest("wwwroot/dist"));
    done();
});