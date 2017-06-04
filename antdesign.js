var path = require("path");
var express = require("express");

var session = require("express-session");
var FileStore = require("session-file-store")(session);
var jqupload = require("jquery-file-upload-middleware"); // jq文件上传中间件
var handlebars = require("express-handlebars").create({ // 引入模板
    defaultLayout: "index"
});

var app = new express();
var main = express.Router(); // 拆分路由
var identityKey = "skey";

var loginRouter = require("./server/route/login");
var logoutRouter = require("./server/route/logout");

app.engine("handlebars", handlebars.engine);
app.set("view engine", "handlebars");

app.set("port", process.env.PORT || 3000); // 设置服务器端口

app.use(express.static("dist")); // 托管静态文件
app.use(require("body-parser")()); // body中间件解析post请求

app.use(session({
    name: identityKey,
    secret: 'chyingp',  // 用来对session id相关的cookie进行签名
    store: new FileStore(),  // 本地存储session（文本文件，也可以选择其他store，比如redis的）
    saveUninitialized: false,  // 是否自动保存未初始化的会话，建议false
    resave: false,  // 是否每次都重新保存会话，建议false
    cookie: {
        maxAge: 10 * 1000  // 有效期，单位是毫秒
    }
}));

// 配置文件／图片上传的存放的文件夹和路径地址
jqupload.configure({
    uploadDir: __dirname + "/uploads",
    uploadUrl: "/upload"
});

// 文件上传
app.use("/upload/userPhoto", function(req, res, next){
    jqupload.fileHandler({
        uploadDir: function () {
            return __dirname + "/uploads/"
        },
        uploadUrl: function () {
            return "/upload/userPhoto"
        }
    })(req, res, next);
});


/*
 * 配置所有的路由，全部转到index
 */
app.get("/", function(req,res){ // 登录首页
    res.render("index");
});
main.get("/modifyPwd", function(req,res){ // 修改密码
    res.render("index");
});
main.get("/menuManage", function(req,res){ // 菜单管理
    res.render("index");
});
main.get("/roleManage", function(req,res){ // 角色管理
    res.render("index");
});
main.get("/userManage", function(req,res){ // 用户管理
    res.render("index");
});
main.get("/userAdd", function(req,res){ // 新增用户
    res.render("index");
});
main.get("/menuTopAdd", function(req,res){ // 新增顶级菜单
    res.render("index");
});
app.get("/*", function(req,res){ // 匹配任何访问地址
    res.render("index");
});

/*
 * 接受前端请求，请求转发给对应的router去处理
 */
app.use("/login", loginRouter);
app.use("/logout", logoutRouter);

/*
 * 启动服务器，监听3000端口
 */
app.listen(app.get("port"),function(){
    console.log("server is start on port 3000");
});