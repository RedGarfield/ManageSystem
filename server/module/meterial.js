var mongoose = require("../db");
var util = require("../util");

var MeterialSchema = new mongoose.Schema({ // 角色schema
	name: String, // 物料名称
    unit: String, // 物料单位，
    spec: String, // 物料规格，
    amount: Number, // 物料库存，
	remark: String, // 备注
	edittime: Date, // 修改时间
	editperson: String // 修改人
});

// 第三个参数指定数据库中的集合，否则mongoose会自动将第一个参数+s作为集合名
var MeterialModel = mongoose.model('Meterial', MeterialSchema, 'meterial'); // 创建用户model

module.exports = {
	save(data){ // 新增一个
		return new Promise((resolve, reject) => { 
			util.save(MeterialModel, data, resolve, reject);
		});
	},
	del(data){ // 删除一个
		return new Promise((resolve, reject) => {
			util.del(MeterialModel ,data, resolve, reject);
		});
	},
	update(condition, data){ // 修改一个
		return new Promise((resolve, reject) => {
			util.update(MeterialModel, condition, data, resolve, reject);
		});
	},
	findList(data){ // 列出所有数据
		return new Promise((resolve, reject) => {
			util.findList(MeterialModel, data, resolve, reject);
		});
	},
	findOne(data){ // 查找单个
		return new Promise((resolve, reject) => {
			util.findOne(MeterialModel, data, resolve, reject);
		});
	},
}