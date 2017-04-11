var path = require("path");

var express = require("express");
var app = new express();

app.set('port', process.env.PORT || 3000); // 搭建服务器

app.use(express.static('dist')); // 托管静态文件
app.use(require('body-parser')()); // body中间件解析post请求


app.get('/', function(req,res){ // 回到首页
    // console.log(__dirname);
    // console.log(path.resolve(__dirname, '/dist/index.html'));
    console.log("请求进来了。。。");
    res.sendfile(__dirname+'/static/index.html');
});

app.get('/main/syslog', function(req,res){ // 回到首页
    console.log(path.resolve(__dirname+'/dist/index.html'));
    // res.sendfile(path.resolve(__dirname, '/dist/index.html'));
});
/*
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

*/
app.listen(app.get('port'),function(){
    console.log("server is start on port 3000");
});