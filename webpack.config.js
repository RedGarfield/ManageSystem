var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var a = 1;

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname,'./dist/')
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
	    }, {
　　　　　　test: /\.(png|jpg)$/,
　　　　　　loader: 'url-loader?limit=8192&name=images/[name].[ext]'
　　　  }]
	},
	plugins: [
	    new ExtractTextPlugin("styles.css")
	]
}