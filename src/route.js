import ModifyPwd from "./modifyPwd/modifyPwd";

import UserList from "./userManage/userList";
import UserAdd from "./userManage/userAdd";
import UserEdit from "./userManage/userEdit";

import Income from "./income/income";

var componentRoute = [
  { "name": 'modifyPwd', "value": ModifyPwd}, // 修改密码
  { "name": 'user', "value": UserList}, // 用户管理
  { "name": 'userAdd', "value": UserAdd}, // 用户新增
  { "name": 'userEdit', "value": UserEdit}, // 用户修改
  { "name": 'income', "value": Income}, // 入库报表
  // { "name": 'user', "value": UserList}, // 菜单管理
  // { "name": 'user', "value": UserList}, // 系统日志
]

export default componentRoute;