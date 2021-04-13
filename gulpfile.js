const elixir = require('laravel-elixir');

require('laravel-elixir-vue-2');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */


elixir(function(mix) {
    // mix.copy(
    //     'node_modules/bootstrap/dist/js/bootstrap.min.js',
    //     'resources/assets/js'
    // ).copy(
    //     'node_modules/bootstrap/dist/css/bootstrap.min.js',
    //     'resources/assets/css'
    // );
    mix.browserSync({
        proxy: '172.16.2.114:8000'
    });

    mix.scripts([
        'bootstrap.js'
    ]);
    mix.sass('app.scss');
});
