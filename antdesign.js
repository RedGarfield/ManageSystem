var path = require("path");

var express = require("express");
var app = new express();

var handlebars = require("express-handlebars").create({ // 引入模板
    defaultLayout: "index"
});
var jqupload = require('jquery-file-upload-middleware'); // jq文件上传中间件

let menuArr = [{
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
    children:[{
        title: '日志查询',
        path: '/',
        component: '',
        icon: 'right-circle',
        children:[]
    }]
}, {
    title: '运营管理',
    path: '',
    component:'',
    icon: 'cloud', 
    children:[{
        title: '病历管理',
        path: '/',
        component: '',
        icon: 'right-circle',
        children:[]
    }, {
        title: '订单管理',
        path: '/',
        component: '',
        icon: 'right-circle',
        children:[]
    }, {
        title: '门诊订单管理',
        path: '/',
        component: '',
        icon: 'right-circle',
        children:[]
    }, {
        title: '门诊品牌管理',
        path: '/',
        component: '',
        icon: 'right-circle',
        children:[]
    }, {
        title: '规格管理',
        path: '/',
        component: '',
        icon: 'right-circle',
        children:[]
    }, {
        title: '服务管理',
        path: '/',
        component: '',
        icon: 'right-circle',
        children:[]
    }, {
        title: '项目类别管理',
        path: '/',
        component: '',
        icon: 'right-circle',
        children:[]
    }, {
        title: '消息记录管理',
        path: '/',
        component: '',
        icon: 'right-circle',
        children:[]
    }, {
        title: '公众号菜单',
        path: '/',
        component: '',
        icon: 'right-circle',
        children:[]
    }, {
        title: '门诊管理',
        path: '/',
        component: '',
        icon: 'right-circle',
        children:[]
    }]
}];
let contentArr = [{
    title: '新增用户',
    path: '/main/userAdd',
    component: 'userAdd',
    icon: 'right-circle',
},{
    title: '新增顶级菜单',
    path: '/main/menuTopAdd',
    component: 'menuTopAdd',
    icon: 'right-circle',
}]

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000); // 设置服务器端口

app.use(express.static('dist')); // 托管静态文件
app.use(require('body-parser')()); // body中间件解析post请求

// 配置文件／图片上传的存放的文件夹和路径地址
jqupload.configure({
    uploadDir: __dirname + '/uploads',
    uploadUrl: '/upload'
});

/*
 * 文件上传
 */
app.use('/upload/userPhoto', function(req, res, next){
    jqupload.fileHandler({
        uploadDir: function () {
            return __dirname + '/uploads/'
        },
        uploadUrl: function () {
            return '/upload/userPhoto'
        }
    })(req, res, next);
});


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
app.get('/main/menuTopAdd', function(req,res){ // 新增顶级菜单
    res.render("index");
});
app.get('/*', function(req,res){ // 匹配任何访问地址
    res.render("index");
});

/*
 * 接受前端请求
 */
app.post('/login', (req,res) => { // 登录请求
    let getObj = req.body;
    if(getObj){
        if(getObj.username === "admin" && getObj.password === "111111"){
            res.json({"success":true,"message":"登录成功..."});
        }else{
            res.json({"success":false,"message":"账号或密码错误..."});
        }
    }else{
        res.json({"success":false,"message":"该系统不存在，请联系系统管理员..."});
    }
});

app.post('/menuList', (req,res) => { // 查询菜单
    res.json({ "isLogin":true, "list":menuArr, "contentList": contentArr });
});

/*
 * 启动服务器，监听3000端口
 */
app.listen(app.get('port'),function(){
    console.log("server is start on port 3000");
});