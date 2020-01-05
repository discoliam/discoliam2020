# Discoliam 2020

[![Netlify Status](https://api.netlify.com/api/v1/badges/13032138-655b-496e-9a94-7aef4a220f0d/deploy-status)](https://app.netlify.com/sites/discoliam2020/deploys)

# tl:dr
- Clone Repo
- `cd` into repo
- `npm install`
- `npm run dev`

## Basic Setup
- Using [11ty](https://www.11ty.dev/) as a Static Site Generator
- Using [Liquid](https://shopify.github.io/liquid/) templates with most content in (Markdown)[https://daringfireball.net/projects/markdown/syntax].
- Static Assets are compiled using [Gulp](https://gulpjs.com/), [PostCSS](https://postcss.org/) and [postcss-preset-env](https://preset-env.cssdb.org/)
-- (Look Mum, no Sass!)

# Development
The command `npm run dev` Does two things:
- Runs the `gulp watch` task, re-comoikling static assets when the files change
- Runs a simple webserver with browser sync, as described in the [11ty Docs](https://www.11ty.dev/docs/usage/#re-run-eleventy-when-you-save)

# Build
`npm run build` will build the site and static assets into the `build` folder.
# Deployment
This site is hosted on [Netlify](https://netlify.com). It re-builds on every push of the master branch.