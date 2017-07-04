var mongoose = require("./db");

var InStorageSchema = new mongoose.Schema({ // 角色schema
	rolename: String, // 角色名称
	remark: String, // 备注
	edittime: Date, // 修改时间
	editperson: String // 修改人
});

// 第三个参数指定数据库中的集合，否则mongoose会自动将第一个参数+s作为集合名
var RoleModel = mongoose.model('Instorage', InStorageSchema, 'instorage'); // 创建用户model

module.exports = {
	findRoleList(data){
		return new Promise((resolve, reject) => {
			RoleModel.find((err, doc) => {
				if(err){
					reject(err);
				}else{
					resolve(doc);
				}
			});
		});
	}
}