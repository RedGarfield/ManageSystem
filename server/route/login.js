var express = require("express");
var router = express.Router();
// var user = require("../module/user");

router.post("/", (req, res) => {
	var userdata = {"loginname": req.body.loginname, "password": req.body.password};
	// user.find(userdata).then(result => { // 查询用户是否存在
    //     if(result){
    //         req.session.regenerate(err => {
    //             if(err){
    //                 res.json({"code": 2, "msg":"登录失败"});
    //             }
    //             req.session.loginUser = user.name;
    //             res.json({"code":0, "msg":"登录成功..."});
    //         })
    //     }else{
    //         res.json({"code":1, "msg":"账号或密码错误..."});
    //     }
    // });
    res.json({"code":200, "status":"success", "msg":"登录成功"});
});

module.exports = router;