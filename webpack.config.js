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
    externals: {
        angular: "angular",
        react: {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react',
            umd: 'react',
        },
        'react-dom': {
            root: 'ReactDOM',
            commonjs2: 'react-dom',
            commonjs: 'react-dom',
            amd: 'react-dom',
            umd: 'react-dom',
        },
        'ng-redux': {
            root: 'NgRedux',
            commonjs2: 'ng-redux',
            commonjs: 'ng-redux',
            umd: 'ng-redux',
        },
        'react-redux': {
            root: 'ReactRedux',
            commonjs2: 'react-redux',
            commonjs: 'react-redux',
            amd: 'react-redux',
            umd: 'react-redux',
        }
    },
    resolve: {
        extensions: [ '.js', '.jsx', '.css' ]
    }
}