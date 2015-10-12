var webpack = require('webpack');

module.exports = {
    entry: './js/index.js',
    output: {
        path: 'out',
        publicPath: '/buildTools/webpack/out/',
        filename: '[name].js'
    },
    module: {
        loaders: [
            {test: /\.jsx?$/, loader: 'babel'},
            {test: /\.ejs$/,  loader: 'ejs'},
            {test: /\.css$/, loader: 'style!css'}
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.ejs']
    },
    plugins: []
};