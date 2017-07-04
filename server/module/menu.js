var mongoose = require("./db");

var MenuSchema = new mongoose.Schema({ // 角色schema
	name: String, // 菜单名称
	icon: String, // 图标
	path: String, // 路径
	component: String, // 组件
	edittime: Date, // 修改时间
	editperson: String // 修改人
});

// 第三个参数指定数据库中的集合，否则mongoose会自动将第一个参数+s作为集合名
var MenuModel = mongoose.model('Menu', MenuSchema, 'menu'); // 创建用户model