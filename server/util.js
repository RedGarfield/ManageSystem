module.exports = {
	isLogin: function(req, res, next){
		let session = req.session;
		let loginUser = session.loginUser;
		let isLogined = !!loginUser;

		return {
			isLogined: isLogined,
			name: loginUser || ""
		};
	},
	save: function(model, data, resolve, reject){ // 通用增加
		model.create(data, (err, doc) => {
			if(err){
				reject(err);
			}else{
				resolve(doc);
			}
		})
	},
	del: function(model, data, resolve, reject){ // 通用删除
		model.remove(data, (err, doc) => {
			if(err){
				reject(err);
			}else{
				resolve(doc);
			}
		})
	},
	update: function(model, resolve, reject){ // 修改单个对象数据

	},
	findList(model, resolve, reject){ // 列出该集合所有数据
		model.find({}, (err, doc) => {
			if(err){
				reject(err);
			}else{
				resolve(doc);
			}
		})
	},
	find(model, data, resolve, reject){ // 查找单个数据
		model.findOne(data, (err, doc) => {
			if(err){
				reject(err);
			}else{
				resolve(doc);
			}
		});
	},
}