var express = require("express");
var router = express.Router();
var user = require("../module/user");

router.post("/login", (req, res, next) => {
	user.findUser(userdata).then(result => {
        if(result){
            req.session.regenerate(err => {
                if(err){
                    res.json({"success": false})
                }
            })
            res.json({"success":true,"message":"登录成功..."});
        }else{
            res.json({"success":false,"message":"账号或密码错误..."});
        }
    });
});

module.exports = router;