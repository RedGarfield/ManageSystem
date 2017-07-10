var express = require("express");
var router = express.Router();
// var user = require("../module/user");

const data = [
    {value:222, name:"数据来源1"},
    {value:111, name:"数据来源2"},
    {value:333, name:"数据来源3"},
    {value:123, name:"数据来源4"},
    {value:231, name:"数据来源5"},
]

router.post("/query", (req, res, next) => {
    res.json({"code":200, "status":"success", "msg":"登录成功", "data":data});
});

module.exports = router;