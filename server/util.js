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
		model.update(condition, data, (err, doc) => {
			if(err){
				reject(err)
			}else{
				resolve(doc);
			}
		})
	},
	findList: function(model, condition, resolve, reject){ // 列出该集合所有数据
		model.find(condition, (err, doc) => {
			if(err){
				reject(err);
			}else{
				resolve(doc);
			}
		})
	},
	findOne: function(model, data, resolve, reject){ // 查找单个数据
		model.findOne(data, (err, doc) => {
			if(err){
				reject(err);
			}else{
				resolve(doc);
			}
		});
	},
}