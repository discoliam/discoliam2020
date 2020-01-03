const gulp    = require("gulp");
const sass    = require("gulp-sass");
const svgSprite    = require("gulp-svg-sprite");
const rename    = require("gulp-rename");
const postcss = require('gulp-postcss');
const postcssPresetEnv = require('postcss-preset-env');
const atImport = require('postcss-import');
const postcssNesting = require('postcss-nesting');

// SASS
gulp.task('sass', function() {
  return gulp.src('./src/scss/app.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    })
    .on('error', sass.logError))
    .pipe(gulp.dest('./src/assets/'));
});

// Post CSS
gulp.task('css', function() {
  return gulp.src('./src/css/app.css')
  .pipe(postcss([
    atImport(),
    postcssNesting(),
    postcssPresetEnv()
  ]))
  .pipe(gulp.dest('./src/assets/'));
});

// SVG
gulp.task('generateSvgSprite', function() {
  return gulp.src("./src/svgs/*.svg")
    .pipe(svgSprite({
        mode: {
          symbol: {
            dest: '',
            sprite: "sprite.svg",
            inline: true,
            example: {
              template: "./sprite-template.html",
              dest: "sprites.html"
            }
          }
        },
        shape : {
          transform : [
            {
              svgo : {
                plugins : [
                    {removeTitle: false}
                ]
              }
            }
          ]
        }
      }))
    .pipe(gulp.dest("./src/assets/"));
});

// MOVE SVG
gulp.task('moveSvgSprite', function() {
  return gulp.src("./src/assets/sprite.svg")
    .pipe(rename("spriteSVG.liquid"))
    .pipe(gulp.dest("./src/_includes"));
});


// Watch Folders for Changes
gulp.task("watch", function() {
  gulp.watch('./src/scss/**/*.scss', gulp.parallel('sass'));
  gulp.watch('./src/css/**/*.css', gulp.parallel('css'));
  gulp.watch('./src/svgs/*.svg', gulp.series('generateSvgSprite', 'moveSvgSprite'));
});

// Build
gulp.task('build', gulp.parallel('css', gulp.series('generateSvgSprite', 'moveSvgSprite') ));