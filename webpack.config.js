var webpack = require('webpack');

module.exports = {
	entry: [
		'webpack-dev-server/client?http://localhost:8080'
		, 'webpack/hot/only-dev-server'
		, './index.web.jsx'
	]
	, module: {
		loaders: [
			{
				test: /\.js*/
				, exclude: /node_modules/
				, loader: 'react-hot!babel'
			}
		]
	}
	, resolve: {
		extensions: [ '', '.js', '.jsx' ]
	}
	, output: {
		path: __dirname + '/www/dist/'
		, publicPath: '/'
		, filename: 'bundle.js'
	}
	, devServer: {
		contentBase: './www/dist'
		, historyApiFallback: true
		, hot: true
		, stats: {
			colors: true
		}
	}
	, plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
};