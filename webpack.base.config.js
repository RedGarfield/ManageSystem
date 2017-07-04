var webpack = require('webpack');
var path = require('path');

const ROOT_PATH = path.resolve(__dirname);
const SRC_PATH = path.resolve(ROOT_PATH, 'src');
const BUILD_PATH = path.resolve(ROOT_PATH, 'dist');

module.exports = {
	entry: {
		bundle: ['./src/index.js', './src/css/common.css'],
		vendor: ['react', 'react-dom', 'react-router', 'react-router-dom']
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname,'./dist/'),
		publicPath: "/"
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
}