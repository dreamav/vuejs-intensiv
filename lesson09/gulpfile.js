var gulp = require('gulp'),
    del = require('del'),
    browserSync = require('browser-sync'),
    webpack = require('webpack-stream');

let isDev = true;
let isProd = !isDev;

let webConfig = {
    output: {
        filename: './dist/build.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                // excluding some local linked packages.
                // for normal use cases only node_modules is needed.
                exclude: /node_modules|vue\/src|vue-router\//,
                loader: 'babel-loader'
            },
        ]
    },
    mode: isDev ? 'development' : 'production',
    resolve: {
        extensions: ['*', '.js', '.vue', '.json']
    },
}

function scripts() {
    return gulp.src('./src/main.js')
        .pipe( webpack(webConfig) )
        .pipe( gulp.dest('./') )
}
gulp.task('scripts', scripts)

gulp.task('browser-sync',function () {
    browserSync({
        proxy: {
            target: "http://vue-lavrik.loc/",
            ws: true
        }
    })
});

gulp.task('watch',['browser-sync','scripts'],function () {
    gulp.watch('./src/**/*.vue',['scripts']);
    gulp.watch('./src/**/*.js',['scripts']);
});

function clean(){
    return del("./dist");
}
gulp.task('clean', clean)

gulp.task('default', ['clean','scripts']);