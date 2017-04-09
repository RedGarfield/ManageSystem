import React from 'react';
import ReactDOM from 'react-dom';
//引入react-router
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import { Layout, Menu, Breadcrumb, Icon, Dropdown } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

const menu = [{
    title: 'home',
    path: '',
    children:[{
        title: 'home111',
        path: '/main/home111',
        children:[]
    },{
        title: 'home222',
        path: '/main/home222',
        children:[]
    }]
},{
    title: 'table',
    path: '',
    children:[{
        title: 'table111',
        path: '/main/table111',
        children:[]
    },{
        title: 'table222',
        path: '/main/table222',
        children:[]
    }]
},{
    title: 'about',
    path: '/main/about',
    children:[]
}];

const Home1 = () => {
    return <h1>123</h1>
}
const Home2 = () => {
    return <h1>321</h1>
}

const menu = (
    <Menu onClick={onClick}>
        <Menu.Item key="1">1st menu item</Menu.Item>
        <Menu.Item key="2">2nd memu item</Menu.Item>
        <Menu.Item key="3">3d menu item</Menu.Item>
    </Menu>
);

class Main extends React.Component {
    constructor(props){
        super(props);
        this.componentArr = [];
    }
    state = {
        collapsed: false,
        mode: 'inline',
        userName: 'lxy'
    };
    onCollapse = (collapsed) => {
        this.setState({
            collapsed,
            mode: collapsed ? 'vertical' : 'inline',
        });
    }
    setMenu(obj){
        let arr = [];
        for(let i = 0, len = obj.length; i < len; i++){ // 循环遍历菜单
            if(obj[i].children.length > 0){ // 如果有子菜单
                let templeMenu = (function setSon(sonMenu){ // 菜单递归函数
                    let sonMenuArr = [];
                    for(let j = 0, len1 = sonMenu.children.length; j < len1; j++){ // 如果子菜单红包含子菜单就调用递归去遍历
                        if(sonMenu.children[j].children.length > 0){
                            sonMenuArr.push(this.setSon(sonMenu.children[j]));
                        }else{ // 没有再次包含子菜单就直接设置
                            sonMenuArr.push(<Menu.Item key={sonMenu.children[j].title}><Link to={sonMenu.children[j].path}>{sonMenu.children[j].title}</Link></Menu.Item>);
                        }
                    }
                    // 返回该层级的顶层子菜单
                    return <SubMenu key={sonMenu.title} title={<span><Icon type="user" /><span className="nav-text">{sonMenu.title}</span></span>} >{sonMenuArr}</SubMenu>
                })(obj[i]);
                arr.push(templeMenu);
            }else{ // 没有子菜单
                arr.push(<Menu.Item key={obj[i].title}><Link to={obj[i].path}>{obj[i].title}</Link></Menu.Item>);
            }
        }
        return arr;
    }
    render(){
        let getMenu = this.setMenu(menu);
        return(
            <Layout>
                <Header style={{ color: '#fff', padding: 0 }}>

                </Header>
                <Layout>
                    <Sider breakpoint="lg" collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse} collapsedWidth="0" >
                        <Menu theme="dark" mode={this.state.mode} defaultSelectedKeys={['6']}>{getMenu}</Menu>
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '12px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                            Content
                        </Content>
                        <Footer style={{ textAlign: 'right', marginRight: '1em' }}>
                            @author lxy
                        </Footer>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}

export default Main;


