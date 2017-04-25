var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: {
		bundle: ['./src/index.js', './src/css/common.css'],
		vendor: ['react', 'react-dom', 'react-router', 'react-router-dom', 'antd']
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname,'./dist/'),
		publicPath: "/"
	},
	devServer:{
		historyApiFallback:true,
		hot:true,
		inline:true,
		progress:true,//报错无法识别，删除后也能正常刷新
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
	    new ExtractTextPlugin({filename: '[name].css', allChunks: true}),
	]
}