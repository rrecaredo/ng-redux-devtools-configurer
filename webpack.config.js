var webpack = require('webpack');

var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist');

var libraryName = 'ng-redux-devtools-configurer';

module.exports = {
    entry: './index.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'index.js',
        library: libraryName,
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        rules: [
            {
                test: /\.js(x?)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    resolve: {
        extensions: [ '.js', '.jsx', '.css' ]
    }
}