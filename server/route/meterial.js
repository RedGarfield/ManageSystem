var express = require("express");
var router = express.Router();
// var user = require("../module/user");

const meterialList = [
    {id: "a001", name:"大白菜", unit:"斤", spec:"无", amount:1, remark:"", editname:"lxy", edittime:"2017-07-08 12:30"},
]

router.post("/list", (req, res, next) => {
    res.json({"code":200, "status":"success", "msg":"登录成功", "data":meterialList});
});
router.post("/edit", (req, res, next) => {
	// user.findUser(userdata).then(result => {
    //     if(result){
    //         req.session.regenerate(err => {
    //             if(err){
    //                 res.json({"success": false})
    //             }
    //         })
    //         res.json({"success":true,"message":"登录成功..."});
    //     }else{
    //         res.json({"success":false,"message":"账号或密码错误..."});
    //     }
    // });
    res.json({"code":200, "status":"success", "msg":"登录成功", "data":meterialList[0]});
});
router.post("/saveAdd", (req, res, next) => {
    res.json({"code":200, "status":"success", "msg":"登录成功", "data":meterialList[0]});
});
router.post("/saveEdit", (req, res, next) => {
    res.json({"code":200, "status":"success", "msg":"登录成功", "data":meterialList[0]});
});

module.exports = router;