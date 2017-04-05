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
}];

class Main extends React.Component {
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
    render(){
        return(
            <Layout>
                <Sider breakpoint="lg" collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse} collapsedWidth="0" >
                    <div className="logo" />
                    <Menu theme="dark" mode={this.state.mode} defaultSelectedKeys={['6']}>
                        <SubMenu key="sub1" title={<span><Icon type="user" /><span className="nav-text">User</span></span>} >
                        {
                            menu.map((cur, index) => (
                                
                                <Menu.Item key={index}><Link to={route.path}></Link></Menu.Item>
                            ))
                        }
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>header</Header>
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div style={{ padding: 24, background: '#fff'}}>
                            content
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

/*<SubMenu key="sub1" title={<span><Icon type="user" /><span className="nav-text">User</span></span>} >
    <Menu.Item key="1">Tom</Menu.Item>
    <Menu.Item key="2">Bill</Menu.Item>
    <Menu.Item key="3">Alex</Menu.Item>
</SubMenu>
<SubMenu key="sub2" title={<span><Icon type="team" /><span className="nav-text">Team</span></span>} >
    <Menu.Item key="4">Team 1</Menu.Item>
    <Menu.Item key="5">Team 2</Menu.Item>
</SubMenu>
<Menu.Item key="6">
    <span>
        <Icon type="file" />
        <span className="nav-text">File</span>
    </span>
</Menu.Item>*/