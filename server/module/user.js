var mongoose = require("../db");
var util = require("../util");

var UserSchema = new mongoose.Schema({ // 用户schema
	username: String, // 用户姓名
	loginname: String, // 登录名
	password: String, // 登陆密码
	rolename: String, // 角色名
	isuse: Boolean, // 是否启用
	edittime: Date, // 修改时间
	editperson: String // 修改人
});


// 第三个参数指定数据库中的集合，否则mongoose会自动将第一个参数+s作为集合名
var UserModel = mongoose.model('User', UserSchema, 'user'); // 创建用户model

module.exports = {
	save(data){ // 新增一个用户
		return new Promise((resolve, reject) => { 
			util.save(UserModel, data, resolve, reject);
		});
	},
	del(data){ // 删除一个用户
		return new Promise((resolve, reject) => {
			util.del(UserModel ,data, resolve, reject);
		});
	},
	update(condition, data){ // 修改一个用户
		return new Promise((resolve, reject) => {
			util.update(UserModel, condition, data, resolve, reject);
		});
	},
	findList(data){ // 列出所有用户数据
		return new Promise((resolve, reject) => {
			util.findList(UserModel, data, resolve, reject);
		});
	},
	findOne(data){ // 查找单个用户
		return new Promise((resolve, reject) => {
			util.findOne(UserModel, data, resolve, reject);
		});
	},
}