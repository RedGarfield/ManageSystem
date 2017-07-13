var express = require("express");
var user = require("../module/user");
var router = express.Router();

const userList = [
    {id: "a001", username:"lixueyuan", loginname:"lixueyuan", password:"123456", rolename:"超级管理员", isuse:1},
]

router.post("/list", (req, res, next) => {
    if(req.body){
        let data = new RegExp(req.body.key);
        user.findList({
            $or:[
                {"username":{$regex: data}},
                {"loginname":{$regex: data}},
                {"rolename":{$regex: data}},
            ]
        }).then(result => {
            if(result){
                res.json({data:result});
            }else{
                res.json({data:[]});
            }
        });
    }
    // res.json({"code":200, "status":"success", "msg":"登录成功", "data":userList});
});
router.post("/find", (req, res, next) => {
    if(req.body && req.body.id){
        user.findOne({_id:req.body.id}).then(result => {
            if(result){
                res.json({data:result});
            }else{
                res.json({});
            }
        });
    }
    // res.json({"code":200, "status":"success", "msg":"登录成功", "data":userList[0]});
});
router.post("/del", (req, res, next) => {
    if(req.body && req.body.id){
        user.del({_id:req.body.id}).then(result => {
            if(result){
                res.status(200).json({"msg":"删除成功"});
            }else{
                res.status(500).json({"msg":"删除失败"});
            }
        });
    }
    // res.json({"code":200, "status":"success", "msg":"登录成功", "data":userList[0]});
});
router.post("/saveAdd", (req, res, next) => {
    if(req.body){
        let obj = req.body;
        obj.editperson = "当前用户";
        obj.edittime = new Date();
        user.save(obj).then(result => {
            if(result){
                res.status(200).json({"msg":"新增成功！"});
            }else{
                res.status(500).json({"msg":"新增失败！"});
            }
        });
    }
    // res.json({"code":200, "status":"success", "msg":"登录成功", "data":userList[0]});
});
router.post("/saveEdit", (req, res, next) => {
    if(req.body && req.body.id){
        let condition = {_id: req.body.id};
        let data = {
            username: req.body.username,
            loginname: req.body.loginname,
            password: req.body.password,
            rolename: req.body.rolename,
            isuse: req.body.isuse,
            editperson: "当前用户",
            edittime: new Date(),
        }
        user.update(condition, data).then(result => {
            if(result){
                res.status(200).json({"msg":"修改成功！"});
            }else{
                res.status(500).json({"msg":"修改失败！"});
            }
        });
    }
    // res.json({"code":200, "status":"success", "msg":"登录成功", "data":userList[0]});
});

module.exports = router;