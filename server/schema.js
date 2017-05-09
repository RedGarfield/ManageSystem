/*
 * 定义各种文档的schema
 */

export const userSchema = { // 用户
	username: String, // 用户姓名
	loginname: String, // 登录名
	password: String, // 登陆密码
	remark: String, // 备注
	rolename: String, // 角色名
	edittime: Date, // 修改时间
	editperson: String // 修改人
};

export const roleSchema = { // 角色
	rolename: String, // 角色名称
	rolelevel: Number, // 角色等级
	remark: String, // 备注
	edittime: Date, // 修改时间
	editperson: String // 修改人
};

export const menuSchema = { // 菜单
	menuname: String, // 菜单名称
	path: String, // 菜单路径
	component: String, // 菜单组件
	icon: String, // 菜单icon
	parent_id: String, // 父级菜单id
	rolename: String, // 角色名称
	edittime: Date, // 修改时间
	editperson: String // 修改人
};

export const routeSchema = { // 子路由
	routename: String, // 路由名称
	path: String, // 路由路径
	component: String, // 路由映射组件
	edittime: Date, // 修改时间
	editperson: String // 修改人
};