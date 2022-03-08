const gulp = require("gulp");
const yargs = require('yargs');
const svgSprite = require("gulp-svg-sprite");
const rename = require("gulp-rename");
const postcss = require('gulp-postcss');
const postcssPresetEnv = require('postcss-preset-env');
const atImport = require('postcss-import');
const postcssNesting = require('postcss-nesting');
const postcssScrollbar = require('postcss-scrollbar');
const purgecss = require('@fullhuman/postcss-purgecss');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack-stream');
const named = require('vinyl-named');


//==============================================================================
// Variables
//==============================================================================
const PRODUCTION = yargs.argv.prod;


// Post CSS
gulp.task('css', function() {
  return gulp.src('./src/css/app.css')
  .pipe(postcss([
    atImport(),
    postcssNesting(),
    postcssPresetEnv({ stage: 1 }),
    postcssScrollbar(),
    // purgecss({
    //   content: ['src/**/*.liquid', 'src/**/*.md'],
    //   whitelist: ["body", "a","abbr","address","area","b","blockquote","br","button","canvas","caption","cite","code","dd","del","dl","dt","em","fieldset","figure","h1","h2","h3","h4","h5","h6","hgroup","hr","i","img","input","label","li","link","mark","ol","p","pre","q","s","small","span","strong","sub","sup","table","tbody","thead","tfoot","td","th","tr","time","ul","video","heading-link","is-open", "first-of-type", ".heading-link"]
    // }),
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

// Scripts
gulp.task('scripts', function() {
  return gulp.src('./src/js/app.js')
  .pipe(named())
  .pipe(webpack({
      module: {
        rules: [
          {
            test: /\.js$/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ["@babel/preset-env"]
              }
            }
          }
        ]
      },
      mode: PRODUCTION ? "production" : "development",
      devtool: !PRODUCTION ? "inline-source-map" : false,
      output: {
        filename: "[name].js"
      }
    }))
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
  gulp.watch('./src/css/**/*.css', gulp.series('css'));
  gulp.watch('./src/js/**/*.js', gulp.series('scripts'));
  gulp.watch('./src/svgs/*.svg', gulp.series('generateSvgSprite', 'moveSvgSprite'));
});

// Build
gulp.task('build', gulp.parallel('css', 'scripts', gulp.series('generateSvgSprite', 'moveSvgSprite') ));