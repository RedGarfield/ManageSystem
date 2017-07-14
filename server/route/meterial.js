var express = require("express");
var meterial = require("../module/meterial");
var router = express.Router();

const meterialList = [
    {id: "a001", name:"大白菜", unit:"斤", spec:"无", amount:1, remark:"", editname:"lxy", edittime:"2017-07-08 12:30"},
]

router.post("/list", (req, res, next) => { // 列表数据
    if(req.body){
        let data = new RegExp(req.body.key);
        meterial.findList({
            $or:[
                {"name":{$regex: data}},
                {"unit":{$regex: data}},
                {"spec":{$regex: data}},
            ]
        }).then(result => {
            if(result){
                res.json({data:result});
            }else{
                res.json({data:[]});
            }
        });
    }
    // res.json({"code":200, "status":"success", "msg":"登录成功", "data":meterialList});
});
router.post("/find", (req, res, next) => { // 查询单个数据
	if(req.body && req.body.id){
        meterial.findOne({_id:req.body.id}).then(result => {
            if(result){
                res.json({data:result});
            }else{
                res.json({});
            }
        });
    }
    // res.json({"code":200, "status":"success", "msg":"登录成功", "data":meterialList[0]});
});
router.post("/del", (req, res, next) => { // 删除数据
    if(req.body && req.body.id){
        meterial.del({_id:req.body.id}).then(result => {
            if(result){
                res.status(200).json({"msg":"删除成功"});
            }else{
                res.status(500).json({"msg":"删除失败"});
            }
        });
    }
    // res.json({"code":200, "status":"success", "msg":"登录成功", "data":userList[0]});
});
router.post("/saveAdd", (req, res, next) => { // 新增
    if(req.body){
        let obj = req.body;
        obj.editperson = "当前用户";
        obj.edittime = new Date();
        meterial.save(obj).then(result => {
            if(result){
                res.status(200).json({"msg":"新增成功！"});
            }else{
                res.status(500).json({"msg":"新增失败！"});
            }
        });
    }
    // res.json({"code":200, "status":"success", "msg":"登录成功", "data":userList[0]});
});
router.post("/saveEdit", (req, res, next) => { // 修改
    if(req.body && req.body.id){
        let condition = {_id: req.body.id};
        let data = {
            name: req.body.name,
            unit: req.body.unit,
            spec: req.body.spec,
            amount: req.body.amount,
            remark: req.body.remark,
            editperson: "当前用户",
            edittime: new Date(),
        }
        meterial.update(condition, data).then(result => {
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