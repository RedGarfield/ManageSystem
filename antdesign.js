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
app.get('/', function(req,res){ // 登录首页
    res.render("index");
});
app.get('/main/modifyPwd', function(req,res){ // 修改密码
    res.render("index");
});
app.get('/main/menuManage', function(req,res){ // 菜单管理
    res.render("index");
});
app.get('/main/roleManage', function(req,res){ // 角色管理
    res.render("index");
});
app.get('/main/userManage', function(req,res){ // 用户管理
    res.render("index");
});
app.get('/main/userAdd', function(req,res){ // 新增用户
    res.render("index");
});
app.get('/*', function(req,res){ // 匹配任何访问地址
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

app.post('/menuList',function(req,res){ // 查询菜单
    res.json({"isLogin":false, "list":[{
            title: '系统管理',
            path: '',
            component:'',
            icon: 'tool', 
            children:[{
                title: '菜单管理',
                path: '/main/menuManage',
                component: 'menuManage',
                icon: 'right-circle',
                children:[]
            }, {
                title: '角色管理',
                path: '/main/roleManage',
                component: 'roleManage',
                icon: 'right-circle',
                children:[]
            }, {
                title: '用户管理',
                path: '/main/userManage',
                component: 'userManage',
                icon: 'right-circle',
                children:[]
            }]
        }, {
            title: '日志管理',
            path: '',
            component:'',
            icon: 'cloud', 
            children:[]
        }], 
        "contentList":[{
            title: '新增用户',
            path: '/main/userAdd',
            component: 'userAdd',
            icon: 'right-circle',
        }]
    })
});

app.post('/query/sysLogList', function(req,res){ // 查询日志列表
    res.json({"isLogin":true, "list":[{"key":"M001", "name":"lxy", "age":23, "address":"广东省广州市天河区"},
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