var gulp = require('gulp'),
    del = require('del'),
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
        .pipe(webpack(webConfig))
        .pipe(gulp.dest('./') )
}
gulp.task('scripts', scripts)

function clean(){
    return del("./dist");
}
gulp.task('clean', clean)

gulp.task('default', ['clean','scripts']);