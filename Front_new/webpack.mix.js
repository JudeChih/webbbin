const  mix  = require('laravel-mix');
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
      fs: "empty"
    },
});

mix.js('resources/assets/js/app.js', 'public/js')
   .js('resources/assets/js/detail.js', 'public/js')
   .js('resources/assets/js/demo.js', 'public/js')
   .js('resources/assets/js/index.js', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css').options({
      processCssUrls: false
   });
