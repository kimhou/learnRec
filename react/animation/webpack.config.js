/**
 * @module webpack.config a
 * @desc
 * @author Created by kimhou on 15/12/25
 */
var path = require('path');
var webpack = require('webpack');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

module.exports = {
	watch: true,
	colors: true,
	profile: true,
	entry: {
		index: './index.js',
		vender: ['jquery', 'react', 'react-dom']
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].bundle.js'
	},
	module: {
		loaders: [
			{test: /\.jsx?$/, loader: 'babel'}
		]
	},
	resolve: {
		extensions: ['', '.json', '.js', '.jsx']
	},
		plugs: [
		new webpack.ProvidePlugin({
			'$': 'jquery',
			'React': 'react',
			'ReactDom': 'react-dom'
		}),
		new webpack.optimize.CommonsChunkPlugin('vender', '[name].[hash].js')
	]
}
;