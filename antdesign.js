var http = require('http'),
	url  = require("url"),
    path = require("path"),
    fs   = require("fs");

var express = require("express");
var app = new express();

app.set('port', process.env.PORT || 3333); // 搭建服务器

app.use(express.static('src')); // 托管静态文件
app.use(require('body-parser')()); // body中间件解析post请求

app.get('/', function(req,res){ // 访问根目录时重定向到首页

});

/*http.createServer(function(req,res){
	var pathname=__dirname+url.parse(req.url).pathname;
    if (path.extname(pathname)=="") {
        pathname+="/src/index.html";
    }
    if (pathname.charAt(pathname.length-1)=="/"){
        pathname+="index.html";
    }
    switch(path.extname(pathname)){
        case ".html":
            res.writeHead(200, {"Content-Type": "text/html"});
            break;
        case ".js":
            res.writeHead(200, {"Content-Type": "text/javascript"});
            break;
        case ".css":
            res.writeHead(200, {"Content-Type": "text/css"});
            break;
        case ".gif":
            res.writeHead(200, {"Content-Type": "image/gif"});
            break;
        case ".jpg":
            res.writeHead(200, {"Content-Type": "image/jpeg"});
            break;
        case ".png":
            res.writeHead(200, {"Content-Type": "image/png"});
            break;
        default:
            res.writeHead(200, {"Content-Type": "application/octet-stream"});
    }
    fs.readFile(pathname,function (err,data){
    	console.log(data);
        res.end(data);
    });
}).listen(3333);

console.log("server is start on port localhost:3333");*/