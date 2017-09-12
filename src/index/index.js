import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, Redirect } from 'react-router-dom'; // 引入react-router
import { Layout, Menu, Icon, Dropdown } from 'antd'; // 引入antd

import componentRoute from '../route';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

export default class IndexPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
            mode: 'inline',
            userName: 'lxy',
        }
    }
    onCollapse = (collapsed) => {
        this.setState({
            collapsed,
            mode: collapsed ? 'vertical' : 'inline',
        });
    }
    componentWillMount() { // 组件加载前发出请求
        // fetch(__dirname+"menuList",{
        //     method: "post"
        // }).then(function(res){
        //     return res.json().then(function(data){ // 获取服务器返回的json对象
        //         return data;
        //     });
        // }).then(function(data){
        //     if(data.isLogin === true){ // 如果验证用户信息正确，就跳转到主页面，并且加载菜单
        //         self.contentArr = data.contentList;
        //         self.setState({"menuArr": self.setMenu(data.list)});
        //     }else{
        //         self.props.history.push("/"); // 未登录跳转登录
        //     }
        // }).catch(function(e){
        //     console.error(e);
        //     self.props.history.push("/"); // 出错或者超时跳转登录
        // });
    }
    dropdownMenu(_callback) { // 用户信息下拉菜单
        return <Menu onClick={_callback}>
            <Menu.Item key="modifyPwd"><Link to="/index/modifyPwd">修改密码</Link></Menu.Item>
            <Menu.Item key="loginout">退出账号</Menu.Item>
        </Menu>
    }
    loginout({key}){
        if(key === "loginout"){

        }
    }
    render() {
        return (
            <Layout>
                <Header>
                    <div className="top-logo1">
                        <img src="/img/logo.png" alt="logo" />
                    </div>
                    <Dropdown overlay={this.dropdownMenu(this.loginout)}>
                        <a className="ant-dropdown-link" href="javascript:void(0);">欢迎您，{this.state.userName} <Icon type="down" /></a>
                    </Dropdown>
                </Header>
                <Layout>
                    <Sider breakpoint="lg" collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse} collapsedWidth="0" >
                        <Menu theme="dark" mode={this.state.mode}>
                            <SubMenu key="sub1" title={<span><Icon type="setting" /><span>系统设置</span></span>}>
                                <Menu.Item key="user"><Link to="/index/userList">用户管理</Link></Menu.Item>
                                <Menu.Item key="sys"><Link to="/index/sysList">系统日志</Link></Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub2" title={<span><Icon type="setting" /><span>物料管理</span></span>}>
                                <Menu.Item key="meterial"><Link to="/index/meterialList">物料设置</Link></Menu.Item>
                                <Menu.Item key="income"><Link to="/index/income">物料入库报表</Link></Menu.Item>
                            </SubMenu>
                            <Menu.Item key="play"><Link to="/index/play">自定义页面</Link></Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout style={{ background: '#f1f3f6' }}>
                        <Content style={{ padding: "10px 24px", margin: 0 }}>
                            {
                                componentRoute.map((cur, index, arr)=>{
                                    return <Route path={"/index/"+cur.name} component={cur.value} key={index} />;
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