var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
	req.session.destroy(function(err) {
        if(err){
            res.json({"code": 1, "msg": '退出登录失败'});
        }

        res.clearCookie(identityKey);
        res.json({'code': 0, "path": "/"});
    });
});

module.exports = router;