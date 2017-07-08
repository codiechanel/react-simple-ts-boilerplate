var gulp = require("gulp");
var gutil = require("gulp-util");

const paths = {
  scripts: {
    src: "src/*.js",
    dest: "dist/scripts/"
  }
};


function scriptsTs(done) {
  gutil.log(gutil.colors.green("scripts called."));
  var browserify = require("browserify");
  var fs = require("fs");
 var tsify = require('tsify')

 var dependencies = ['react', 'react-dom'];
 
return browserify()
    .add('./src/index.tsx')
    .external(dependencies)
    .plugin(tsify, { noImplicitAny: true })
    .bundle()
    .on('error', function (error) { console.error(error.toString()); })
    // .pipe(process.stdout)
    .pipe(fs.createWriteStream("./public/dev.js"));
}

function scripts(done) {
  gutil.log(gutil.colors.green("scripts called."));
  var browserify = require("browserify");
  var fs = require("fs");
  //   return gulp.src(paths.scripts.src, { sourcemaps: true })
  //     .pipe(babel())
  //     .pipe(uglify())
  //     .pipe(concat('index.min.js'))
  //     .pipe(gulp.dest(paths.scripts.dest));

  return browserify("./src/index.js")
    .transform("babelify", { presets: ["es2015", "react"] })
    .bundle()
    .pipe(fs.createWriteStream("./public/dev.js"));
//   done();
}

const watch = () => gulp.watch(paths.scripts.src, gulp.series(scripts, reload));

// export function styles() {
//   console.log("cool");
//   return "success";
// }



const build = gulp.series(scriptsTs);
export { build }




/*
 * Export a default task
 */
export default build;
