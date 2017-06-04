import ModifyPwd from './modifyPwd/modifyPwd';
import MenuList from './menuManage/menuList';
import RoleList from './roleManage/roleList';
import UserList from './userManage/userList';

import UserAdd from './userManage/userAdd';
import MenuTopAdd from './menuManage/menuTopAdd';

var componentRoute = {
	'modifyPwd': ModifyPwd, // 修改密码 
    'roleManage': RoleList, // 角色管理
    'menuTopAdd': MenuTopAdd, // 顶级菜单新增
}

export default componentRoute;