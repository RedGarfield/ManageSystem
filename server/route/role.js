var express = require("express");
var system = express.Router();
var user = require("../module/role");

system.post("/login", (req, res) => {
	if(req.body){
		user.findUser(userdata).then(result => {
            if(result){
                res.json({"success":true,"message":"登录成功..."});
            }else{
                res.json({"success":false,"message":"账号或密码错误..."});
            }
        });
	}else{
		res.json({"success":false,"message":"系统错误，请联系系统管理员..."});
	}
});