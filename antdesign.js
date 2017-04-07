var express = require("express");
var app = new express();

app.set('port', process.env.PORT || 3000); // 搭建服务器

app.use(express.static('dist')); // 托管静态文件
app.use(require('body-parser')()); // body中间件解析post请求

app.get('/', function(req,res){ // 访问根目录时重定向到首页
    res.sendfile('index.html');
});

app.post('/main', function(req,res){ // 访问首页
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

app.listen(app.get('port'),function(){
    console.log("server is start on port 3000");
});