import ModifyPwd from "./modifyPwd/modifyPwd";

import UserList from "./userManage/userList";
import UserAdd from "./userManage/userAdd";
import UserEdit from "./userManage/userEdit";

import MeterialList from "./meterial/meterialList";
import MeterialAdd from "./meterial/meterialAdd";
import MeterialEdit from "./meterial/meterialEdit";
import Income from "./income/income";

import PlayPage from "./addForm/play";

var componentRoute = [
  { "name": 'modifyPwd', "value": ModifyPwd}, // 修改密码
  { "name": 'userList', "value": UserList}, // 用户管理
  { "name": 'userAdd', "value": UserAdd}, // 用户新增
  { "name": 'userEdit', "value": UserEdit}, // 用户修改
  { "name": 'meterialList', "value": MeterialList}, // 物料列表
  { "name": 'meterialAdd', "value": MeterialAdd}, // 物料列表
  { "name": 'meterialEdit', "value": MeterialEdit}, // 物料列表
  { "name": 'income', "value": Income}, // 入库报表
  { "name": 'play', "value": PlayPage}, // 自定义页面
];

export default componentRoute;