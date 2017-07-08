var express = require("express");
var router = express.Router();
// var user = require("../module/user");

const userList = [
    {id: "a001", username:"lixueyuan", loginname:"lixueyuan", password:"123456", rolename:"超级管理员", isuse:1},
]

router.post("/list", (req, res, next) => {
    res.json({"code":200, "status":"success", "msg":"登录成功", "data":userList});
});
router.post("/edit", (req, res, next) => {
    res.json({"code":200, "status":"success", "msg":"登录成功", "data":userList[0]});
});
router.post("/saveAdd", (req, res, next) => {
    res.json({"code":200, "status":"success", "msg":"登录成功", "data":userList[0]});
});
router.post("/saveEdit", (req, res, next) => {
    res.json({"code":200, "status":"success", "msg":"登录成功", "data":userList[0]});
});

module.exports = router;