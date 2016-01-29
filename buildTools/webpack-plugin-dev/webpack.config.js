/**
 * @module webpack.test.js
 * @desc
 * @author Created by kimhou on 16/1/28
 */

module.exports = {
	entry: './src/App.js',
	output: {
		filename: '[name].bundle.js',
		path: './dist'
	},
	watch: true,
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: 'babel',
				exclude: /node_module/,
				query:{
					presets: ['react', 'es2015']
				}
			}
		]
	},
	externals: {
		'react': 'window.React',
		'react-dom': 'window.ReactDOM'
	}
}