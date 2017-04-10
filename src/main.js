import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, Redirect } from 'react-router-dom'; // 引入react-router
import { Layout, Menu, Icon, Dropdown } from 'antd'; // 引入antd

import Syslog from './syslog/syslog.js';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

const menu = [{
    title: '日志管理',
    path: '',
    component:'',
    children:[{
        title: '日志查询',
        path: '/main/syslog',
        component: 'syslog',
        children:[]
    }]
}];

class Main extends React.Component {
    constructor(props){
        super(props);
        this.componentArr = [];
    }
    state = {
        collapsed: false,
        mode: 'inline',
        userName: 'lxy'
    }
    setRoute = { // 组件菜单映射
        'syslog': Syslog
    }
    onCollapse = (collapsed) => {
        this.setState({
            collapsed,
            mode: collapsed ? 'vertical' : 'inline',
        });
    }
    componentDidMount(){ // 组件加载完毕后
        
    }
    onLoginOut({key}){ // 登出方法
        if(key === "loginout"){
            alert("退出登录");
        }
    }
    dropdownMenu(){ // 用户信息下拉菜单
        return <Menu onClick={this.onLoginOut.bind(this)}>
            <Menu.Item key="loginout">退出账号</Menu.Item>
        </Menu>
    }
    setMenu(obj){ // 设置侧边栏菜单
        let arr = [], _self = this;
        _self.componentArr.length = 0; // 由于setState会导致render重绘，所以需要将构造器中动态改变的值重置
        for(let i = 0, len = obj.length; i < len; i++){ // 循环遍历菜单
            if(obj[i].children && obj[i].children.length > 0){ // 如果有子菜单
                let templeMenu = (function setSon(sonMenu){ // 菜单递归函数
                    let sonMenuArr = [];
                    for(let j = 0, len1 = sonMenu.children.length; j < len1; j++){ // 如果子菜单红包含子菜单就调用递归去遍历
                        if(sonMenu.children[j].children && sonMenu.children[j].children.length > 0){
                            sonMenuArr.push(setSon(sonMenu.children[j]));
                        }else{ // 没有再次包含子菜单就直接设置
                            _self.componentArr.push({path:sonMenu.children[j].path,component:sonMenu.children[j].component}); // 获取菜单数据的路径和组件
                            sonMenuArr.push(<Menu.Item key={sonMenu.children[j].title}><Link to={sonMenu.children[j].path}><Icon type="user" />{sonMenu.children[j].title}</Link></Menu.Item>);
                        }
                    }
                    // 返回该层级的顶层子菜单
                    return <SubMenu key={sonMenu.title} title={<span><Icon type="user" /><span className="nav-text">{sonMenu.title}</span></span>} >{sonMenuArr}</SubMenu>
                })(obj[i]);
                arr.push(templeMenu);
            }else{ // 没有子菜单
                _self.componentArr.push({path:obj[i].path,component:obj[i].component}); // 获取菜单数据的路径和组件
                arr.push(<Menu.Item key={obj[i].title}><Link to={obj[i].path}><Icon type="user" />{obj[i].title}</Link></Menu.Item>);
            }
        }
        return arr;
    }
    render(){
        let _target = this, // 获取this
            getMenu = _target.setMenu(menu),
            dropdownMenu = _target.dropdownMenu();
        return(
            <Layout>
                <Header>
                    <div className="top-logo1">
                        <img src="img/logo.png" alt="logo" />
                    </div>
                    <Dropdown overlay={dropdownMenu}>
                        <a className="ant-dropdown-link" href="javascript:void(0);">欢迎您，{this.state.userName} <Icon type="down" /></a>
                    </Dropdown>
                </Header>
                <Layout>
                    <Sider breakpoint="lg" collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse} collapsedWidth="0" >
                        <Menu theme="dark" mode={this.state.mode} defaultSelectedKeys={['6']}>{getMenu}</Menu>
                    </Sider>
                    <Layout style={{ background: '#f1f3f6' }}>
                        <Content style={{ padding: 24, margin: 0 }}>
                            <Redirect to="/main/syslog"/>
                            {
                                this.componentArr.map(function(cur,index,arr){
                                    let component = _target.setRoute[cur.component];
                                    return <Route key={index} exact path={cur.path} component={component}/>
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

export default Main;


