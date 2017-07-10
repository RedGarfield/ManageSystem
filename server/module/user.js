var mongoose = require("../db");

var UserSchema = new mongoose.Schema({ // 用户schema
	username: String, // 用户姓名
	loginname: String, // 登录名
	password: String, // 登陆密码
	remark: String, // 备注
	rolename: String, // 角色名
	lastlogintime: Date, // 最后登录时间
	isuse: String, // 是否启用
	edittime: Date, // 修改时间
	editperson: String // 修改人
});


// 第三个参数指定数据库中的集合，否则mongoose会自动将第一个参数+s作为集合名
var UserModel = mongoose.model('User', UserSchema, 'user'); // 创建用户model

module.exports = {
	save(data){ // 新增一个用户
		return new Promise((resolve, reject) => { 
			UserModel.create(data, (err, doc) => {
				if(err){
					reject(err);
				}else{
					resolve(doc);
				}
			})
		});
	},
	remove(data){ // 删除一个用户
		return new Promise((resolve, reject) => {
			UserModel.remove(data, (err, doc) => {
				if(err){
					reject(err);
				}else{
					resolve(doc);
				}
			})
		});
	},
	update(data){ // 修改一个用户
		return new Promise((resolve, reject) => {
			UserModel.update(data, (err, doc) => {
				if(err){
					reject(err);
				}else{
					resolve(doc);
				}
			})
		});
	},
	findList(){ // 列出所有用户数据
		return new Promise((resolve, reject) => {
			UserModel.find({}, (err, doc) => {
				if(err){
					reject(err);
				}else{
					resolve(doc);
				}
			})
		});
	},
	find(data){ // 查找单个用户
		return new Promise((resolve, reject) => {
			UserModel.findOne(data, (err, doc) => {
				if(err){
					reject(err);
				}else{
					resolve(doc);
				}
			});
		});
	},
}