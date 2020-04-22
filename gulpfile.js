const gulp    = require("gulp");
const svgSprite    = require("gulp-svg-sprite");
const rename    = require("gulp-rename");
const postcss = require('gulp-postcss');
const postcssPresetEnv = require('postcss-preset-env');
const atImport = require('postcss-import');
const postcssNesting = require('postcss-nesting');
const purgecss = require('@fullhuman/postcss-purgecss');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');

// Post CSS
gulp.task('css', function() {
  return gulp.src('./src/css/app.css')
  .pipe(postcss([
    atImport(),
    postcssNesting(),
    postcssPresetEnv({ stage: 0 }),
    purgecss({
      content: ['src/**/*.liquid'],
      whitelist: ["a","abbr","address","area","b","blockquote","br","button","canvas","caption","cite","code","dd","del","dl","dt","em","fieldset","figure","h1","h2","h3","h4","h5","h6","hgroup","hr","i","img","input","label","li","link","mark","ol","p","pre","q","s","small","span","strong","sub","sup","table","tbody","thead","tfoot","td","th","tr","time","ul","video"]
    }),
    autoprefixer(),
    cssnano({
      preset: ['default', {
        discardComments: {
            removeAll: true,
        },
    }]
    })
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
  gulp.watch('./src/css/**/*.css', gulp.parallel('css'));
  gulp.watch('./src/svgs/*.svg', gulp.series('generateSvgSprite', 'moveSvgSprite'));
});

// Build
gulp.task('build', gulp.parallel('css', gulp.series('generateSvgSprite', 'moveSvgSprite') ));