var mongoose = require("./db");

var MeterialSchema = new mongoose.Schema({ // 角色schema
	name: String, // 物料名称
  unit: String, // 物料规格，
  amount: Number, // 物料库存，
	remark: String, // 备注
	edittime: Date, // 修改时间
	editperson: String // 修改人
});

// 第三个参数指定数据库中的集合，否则mongoose会自动将第一个参数+s作为集合名
var MeterialModel = mongoose.model('Meterial', MeterialSchema, 'meterial'); // 创建用户model

module.exports = {
	findRoleList(data){
		return new Promise((resolve, reject) => {
			MeterialModel.find((err, doc) => {
				if(err){
					reject(err);
				}else{
					resolve(doc);
				}
			});
		});
	}
}