var webpack = require('webpack');

var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);

var PROD = process.env.NODE_ENV === 'production';

module.exports = {
    devtool: PROD ? '' : 'eval-source-map',
    entry: [
        path.resolve(ROOT_PATH, 'app/src/index')
    ],
    module: {
        preLoaders: [
            {
                test: /\.jsx?$/,
                loaders: PROD ? [] : ['eslint'],
                include: path.resolve(ROOT_PATH, 'app')
            }
        ],
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['babel']
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        path: PROD ? path.resolve(ROOT_PATH, 'app/dist') : path.resolve(ROOT_PATH, 'app/build'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(ROOT_PATH, 'app/build'),
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlwebpackPlugin({
            title: 'Set Title'
        })
    ]
};
