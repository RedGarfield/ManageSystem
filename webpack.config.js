var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: {
		bundle: ['./src/index.js', './src/css/common.css'],
		vendor: ['react', 'react-dom', 'react-router', 'react-router-dom']
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname,'./dist/'), // 静态资源存放目录
		publicPath: "/" //静态资源引用路径
	},
	module: {
	    rules: [{
	      	test: /\.(js|jsx)$/,        //文件后缀、类型      
	      	exclude: /node_modules/,    //排除这个目录的文件
	      	loader: 'babel-loader',     //使用的加载器
	      	options: {
	        	presets: ['react', "es2015", 'stage-0'], //插件
	    	}
		}, {
	        test: /\.css$/,
	        use: ExtractTextPlugin.extract({
	        	fallback: "style-loader",
	          	use: "css-loader"
	        })
	    }]
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor']
        }),
	    new ExtractTextPlugin({filename: '[name].css'}) // 提取css
	]
}