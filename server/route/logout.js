var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
	req.session.destroy(function(err) { // 销毁所有session
        if(err){
            res.json({"code": 404, "success":"false", "msg": '退出登录失败'});
        }
        res.json({'code': 200, "success":"true", "path": "/"});
    });
});

module.exports = router;