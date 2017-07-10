var path = require("path");
var express = require("express");

/**
 * 引第三方库
 */
var body_parser = require("body-parser")();
var session = require("express-session");
var FileStore = require("session-file-store")(session);
var jqupload = require("jquery-file-upload-middleware"); // jq文件上传中间件
var handlebars = require("express-handlebars").create({ // 引入模板
	defaultLayout: "index"
});

var app = new express();
var index = express.Router();  // 拆分路由

// 引入路由
var loginRouter = require("./server/route/login");
var logoutRouter = require("./server/route/logout");
var userRouter = require("./server/route/user");
var meterialRouter = require("./server/route/meterial");

app.engine("handlebars", handlebars.engine);
app.set("view engine", "handlebars");
app.set("port", process.env.PORT || 3000); // 设置服务器端口

app.use(express.static("dist")); // 托管静态文件
app.use(body_parser); // body中间件解析post请求

// app.use(session({
// 	name: "lxy",
// 	secret: 'chyingp',  // 用来对session id相关的cookie进行签名
// 	store: new FileStore(),  // 本地存储session（文本文件，也可以选择其他store，比如redis的）
// 	saveUninitialized: false,  // 是否自动保存未初始化的会话，建议false
// 	resave: false,  // 是否每次都重新保存会话，建议false
// 	cookie: {
// 		maxAge: 60 * 1000 * 60 // 有效期，单位是毫秒
// 	}
// }));

// 文件上传
// app.use("/upload/userPhoto", function(req, res, next){
// 	jqupload.fileHandler({
// 		uploadDir: function () {
// 			return __dirname + "/uploads/"
// 		},
// 		uploadUrl: function () {
// 			return "/upload/userPhoto"
// 		}
// 	})(req, res, next);
// });


// 配置所有的路由，全部转到index
app.get("/", function(req,res){ // 登录首页
	res.render("index");
});
app.get("*", function(req,res){ // 匹配任何访问地址
	res.render("index");
});

// 接受前端请求，请求转发给对应的router去处理
app.use("/login", loginRouter);
app.use("/user", userRouter);
app.use("/meterial", meterialRouter);

// 启动服务器
app.listen(app.get("port"),function(){
	console.log("server is start on port 3000");
});