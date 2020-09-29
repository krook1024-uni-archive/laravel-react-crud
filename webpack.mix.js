const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

/*mix.sass('resources/sass/app.scss', 'public/css')
    .postCss('public/css/app.scss', 'public/css', [
        require('postcss-css-variables')
    ]);*/

mix.react("resources/js/app.js", "public/js");

mix.browserSync("lrc.local");
