module.exports = {
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
	update: function(model, condition, data, resolve, reject){ // 修改单个对象数据
		data = {$set: data};
		// model.update(condition, data, )
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
	findOne(model, data, resolve, reject){ // 查找单个数据
		model.findOne(data, (err, doc) => {
			if(err){
				reject(err);
			}else{
				resolve(doc);
			}
		});
	},
}