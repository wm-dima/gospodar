const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const PATHS = {
	src: path.join(__dirname, './src'),
	dist: path.join(__dirname, './dist'),
	assets: 'assets/'	
}
const buildWebpackConfig = merge(baseWebpackConfig, {
		mode: 'production',
		module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					MiniCssExtractPlugin.loader,
					'css-loader',
					{
						loader: 'postcss-loader',
						options: { sourceMap: true, config: {path: 'src/assets/js/postcss.config.js'} }
					},
					'sass-loader'
				]

			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					MiniCssExtractPlugin.loader,
					'css-loader',
					{
						loader: 'postcss-loader',
						options: { sourceMap: true, config: {path: 'src/assets/js/postcss.config.js'} }
					},
				]

			},
	         {
				test: /\.(png|jpg|gif|svg)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
					outputPath: `${PATHS.assets}images/`,
					publicPath: "../images/"
				}
			},
	        {
                test: /\.(woff|ttf|eot|otf)$/,
                loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: `${PATHS.assets}fonts/`,
                        publicPath: "../fonts/"
                    }
            }
		]
	},
	plugins: [
	    new MiniCssExtractPlugin({
    		filename: 'assets/css/[name].css',
    	}),
	]
})

module.exports = new Promise((resolve, reject) => {
	resolve(buildWebpackConfig)
})

