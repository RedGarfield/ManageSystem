import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, Redirect } from 'react-router-dom'; // 引入react-router
import { Layout, Menu, Icon, Dropdown } from 'antd'; // 引入antd

import ModifyPwd from './../modifyPwd/modifyPwd.js';
import MenuManage from './../menuManage/menuManage.js';
import RoleManage from './../roleManage/roleManage.js';
import UserManage from './../userManage/userManage.js';
import UserAdd from './../userManage/userAdd.js';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class MainPage extends React.Component {
    constructor(props){
        super(props);
        this.componentArr = [];
        this.contentArr = [];
        this.state = {
            collapsed: false,
            mode: 'inline',
            userName: 'lxy',
            menuArr: [],
        }
    }
    setRoute = { // 组件菜单映射
        'modifyPwd': ModifyPwd, // 修改密码 
        'menuManage': MenuManage, // 菜单管理
        'roleManage': RoleManage, // 角色管理
        'userManage': UserManage, // 用户管理
        'userAdd': UserAdd, // 用户新增
    }
    onCollapse = (collapsed) => {
        this.setState({
            collapsed,
            mode: collapsed ? 'vertical' : 'inline',
        });
    }
    componentWillMount(){ // 组件加载前发出请求
        let self = this;
        fetch(__dirname+"menuList",{
            method: "post"
        }).then(function(res){
            return res.json().then(function(data){ // 获取服务器返回的json对象
                return data;
            });
        }).then(function(data){
            if(data.isLogin === true){ // 如果验证用户信息正确，就跳转到主页面，并且加载菜单
                self.contentArr = data.contentList;
                self.setState({"menuArr": self.setMenu(data.list)});
            }else{
                self.props.history.push("/"); // 未登录跳转登录
            }
        }).catch(function(e){
            console.error(e);
            self.props.history.push("/"); // 出错或者超时跳转登录
        });
    }
    onLoginOut({key}){ // 登出方法
        if(key === "loginout"){
            alert("退出登录");
        }
    }
    dropdownMenu(){ // 用户信息下拉菜单
        return <Menu onClick={this.onLoginOut.bind(this)}>
            <Menu.Item key="modifyPwd"><Link to="/main/modifyPwd">修改密码</Link></Menu.Item>
            <Menu.Item key="loginOut">退出账号</Menu.Item>
        </Menu>
    }
    setMenu(obj){ // 设置侧边栏菜单
        let arr = [], _self = this;
        for(let i = 0, len = obj.length; i < len; i++){ // 循环遍历菜单
            if(obj[i].children && obj[i].children.length > 0){ // 如果有子菜单
                let templeMenu = (function setSon(sonMenu){ // 菜单递归函数
                    let sonMenuArr = [];
                    for(let j = 0, len1 = sonMenu.children.length; j < len1; j++){ // 如果子菜单红包含子菜单就调用递归去遍历
                        if(sonMenu.children[j].children && sonMenu.children[j].children.length > 0){
                            sonMenuArr.push(setSon(sonMenu.children[j]));
                        }else{ // 没有再次包含子菜单就直接设置
                            _self.componentArr.push({path:sonMenu.children[j].path,component:sonMenu.children[j].component}); // 获取菜单数据的路径和组件
                            sonMenuArr.push(<Menu.Item key={sonMenu.children[j].title}><Link to={sonMenu.children[j].path}><Icon type={sonMenu.children[j].icon} />{sonMenu.children[j].title}</Link></Menu.Item>);
                        }
                    }
                    // 返回该层级的顶层子菜单
                    return <SubMenu key={sonMenu.title} title={<span><Icon type={sonMenu.icon} /><span className="nav-text">{sonMenu.title}</span></span>} >{sonMenuArr}</SubMenu>
                })(obj[i]);
                arr.push(templeMenu);
            }else{ // 没有子菜单
                _self.componentArr.push({path:obj[i].path,component:obj[i].component}); // 获取菜单数据的路径和组件
                arr.push(<Menu.Item key={obj[i].title}><Link to={obj[i].path}><Icon type={obj[i].icon} />{obj[i].title}</Link></Menu.Item>);
            }
        }
        return arr;
    }
    render(){
        let _target = this, // 获取this
            dropdownMenu = _target.dropdownMenu();
        return(
            <Layout>
                <Header>
                    <div className="top-logo1">
                        <img src="/img/logo.png" alt="logo" />
                    </div>
                    <Dropdown overlay={dropdownMenu}>
                        <a className="ant-dropdown-link" href="javascript:void(0);">欢迎您，{this.state.userName} <Icon type="down" /></a>
                    </Dropdown>
                </Header>
                <Layout>
                    <Sider breakpoint="lg" collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse} collapsedWidth="0" >
                        <Menu theme="dark" mode={this.state.mode} defaultSelectedKeys={['6']}>{this.state.menuArr}</Menu>
                    </Sider>
                    <Layout style={{ background: '#f1f3f6' }}>
                        <Content style={{ padding: "10px 24px", margin: 0 }}>
                            <Redirect to="/main/modifyPwd" />
                            <Route path="/main/modifyPwd" component={ModifyPwd} />
                            {
                                this.componentArr.map(function(cur,index,arr){
                                    let component = _target.setRoute[cur.component];
                                    return <Route key={index} path={cur.path} component={component} />
                                })
                            }
                            {
                                this.contentArr.map(function(cur,index,arr){
                                    let component = _target.setRoute[cur.component];
                                    return <Route key={index} path={cur.path} component={component} />
                                })
                            }
                        </Content>
                        <Footer style={{ textAlign: 'right' }}>
                            @author lxy
                        </Footer>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}

export default MainPage;


