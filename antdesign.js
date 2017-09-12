let path = require("path");
let fs = require("fs");
// 引第三方库
let express = require("express");
let body_parser = require("body-parser")();
let cookie = require("cookie-parser");
let session = require("express-session");
let ReactDOMServer = require("react-dom/server");
let multer = require("multer");

let app = new express();
let index = express.Router();  // 拆分路由

//引入路由
let loginRouter = require("./server/route/login");
// let logoutRouter = require("./server/route/logout");
// let userRouter = require("./server/route/user");
// let meterialRouter = require("./server/route/meterial");
// let incomeRouter = require("./server/route/income");

app.set("port", process.env.PORT || 3000);// 设置服务器端口
// 托管静态文件
app.use(express.static("dist"));
app.use(body_parser);// body中间件解析post请求

let createFolder = function(folder){
	try{
		fs.accessSync(folder); 
	}catch(e){
		fs.mkdirSync(folder);
	}  
};

let uploadFolder = './dist/uploads/';
createFolder(uploadFolder);

// 通过 filename 属性定制
let storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, uploadFolder);    // 保存的路径，备注：需要自己创建
	},
	filename: function (req, file, cb) {
		// 将保存文件名设置为 字段名 + 时间戳 +　文件格式，比如 logo-1478521468943.png
		let mineName = file.originalname.split(".")[1];
		cb(null, file.fieldname + '-' + Date.now()+"."+mineName);  
	}
});

// 通过 storage 选项来对 上传行为 进行定制化
let upload = multer({ storage: storage })

// 文件上传
let cpUpload = upload.fields([
	{ name: 'userFile', maxCount: 1 }, 
	{ name: 'userPic', maxCount: 8 },
]);
app.post('/upload', cpUpload, function(req, res, next){
	// 判断是否多文件上传
	if(req.file != null){
		let file = req.file;
		res.send({path: "http://"+req.headers.host+"/"+file.path});
	}else{
		let key = null;
		for(let obj in req.files){
			key = obj;
		}
		res.send({path: "http://"+req.headers.host+"/"+req.files[key][0].path});
	}
});
// 文件下载
app.get("/dist/uploads/*", function(req, res){
	res.sendFile(__dirname+req.path);
})

// 匹配任何访问地址，用于页面刷新时
app.get("*", function(req,res){ 
	res.sendFile(__dirname+"/dist/index.html");
});

// 接受前端请求，请求转发给对应的router去处理
app.use("/login", loginRouter);
// app.use("/user", userRouter);
// app.use("/meterial", meterialRouter);
// app.use("/income", incomeRouter);

// 启动服务器
app.listen(app.get("port"),function(){
	console.log("server is start on port 3000");
});