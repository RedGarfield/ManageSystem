import React from 'react';
import ReactDOM from 'react-dom';
//引入react-router
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
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

class Main extends React.Component {
    constructor(props){
        super(props);
        this.componentArr = [];
    }
    state = {
        collapsed: false,
        mode: 'inline',
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
                arr.push(<Menu.Item key={obj[i].title}>{obj[i].title}</Menu.Item>);
            }
        }
        return arr;
    }
    render(){
        let getMenu = this.setMenu(menu);
        return(
            <Layout>
                <Sider breakpoint="lg" collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse} collapsedWidth="0" >
                    <div className="logo" />
                    <Menu theme="dark" mode={this.state.mode} defaultSelectedKeys={['6']}>{getMenu}</Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>header</Header>
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div style={{ padding: 24, background: '#fff'}}>
                            <Route path="/main/home111" component={Home1} />
                            <Route path="/main/home222" component={Home2} />
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Ant Design ©2016 Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
        )
    }
}

export default Main;