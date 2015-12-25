/**
 * @module webpack.config
 * @desc
 * @author Created by kimhou on 15/12/25
 */
var path = require('path');

module.exports = {
	watch: true,
	entry: {
		index: './index.js'
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'index.bundle.js'
	},
	module: {
		loaders: [
			{test: /\.jsx?$/, loader: 'babel'}
		]
	},
	resolve: {
		extensions: ['', 'js', 'jsx']
	}
}
;