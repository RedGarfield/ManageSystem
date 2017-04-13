var path = require("path");

var express = require("express");
var app = new express();

var handlebars = require("express-handlebars").create({
    defaultLayout: "index"
});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000); // 设置服务器端口

app.use(express.static('dist')); // 托管静态文件
app.use(require('body-parser')()); // body中间件解析post请求

/*
 * 配置所有的路由，全部转到index
 */
app.get('/', function(req,res){ // 回到首页
    res.render("index");
});

app.get('/main/syslog', function(req,res){ // 回到首页
    res.render("index");
});

app.get('/main/addForm', function(req,res){ // 回到首页
    res.render("index");
});

/*
 * 接受前端请求
 */
app.post('/login', function(req,res){ // 登录请求
    if(req.query.length !== 0){
        if(req.query.username === "admin" && req.query.password === "111111"){
            res.json({"success":true,"message":"登录成功..."});
        }else{
            res.json({"success":false,"message":"账号或密码错误..."});
        }
    }else{
        res.json({"success":false,"message":"该系统不存在，请联系系统管理员..."});
    }
});

app.post('/query/sysLogList', function(req,res){ // 查询日志列表
    res.json({"isLogin":true, "path":"/main", "list":[{"key":"M001", "name":"lxy", "age":23, "address":"广东省广州市天河区"},
        {"key":"M002", "name":"lxy", "age":22, "address":"广东省广州市黄埔区"},
        {"key":"M003", "name":"lxy", "age":21, "address":"广东省广州市越秀区"},
        {"key":"M004", "name":"lxy", "age":20, "address":"广东省广州市荔湾区"},
        {"key":"M005", "name":"lxy", "age":19, "address":"广东省广州市海珠区"}]});
});


/*
 * 启动服务器，监听3000端口
 */
app.listen(app.get('port'),function(){
    console.log("server is start on port 3000");
});