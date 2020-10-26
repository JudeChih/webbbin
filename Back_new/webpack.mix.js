const mix = require("laravel-mix");
// if (process.env.NODE_ENV !== 'testing') {
//    mix.extract(['vue']);
// }
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.webpackConfig({
  node: {
    fs: "empty",
  },
});

mix
  .js("resources/assets/js/app.js", "public/js")
  .js("resources/assets/js/index.js", "public/js")
  .js("resources/assets/js/logo.js", "public/js")
  .js("resources/assets/js/project.js", "public/js")
  .js("resources/assets/js/transaction.js", "public/js")
  .js("resources/assets/js/user.js", "public/js")
  .js("resources/assets/js/allinone.js", "public/js")
  .sass("resources/assets/sass/app.scss", "public/css")
  .options({
    processCssUrls: false,
  });
