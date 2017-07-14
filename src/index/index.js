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
    // setMenu(obj){ // 设置侧边栏菜单
    //     let arr = [], _self = this;
    //     for(let i = 0, len = obj.length; i < len; i++){ // 循环遍历菜单
    //         if(obj[i].children && obj[i].children.length > 0){ // 如果有子菜单
    //             let templeMenu = (function setSon(sonMenu){ // 菜单递归函数
    //                 let sonMenuArr = [];
    //                 for(let j = 0, len1 = sonMenu.children.length; j < len1; j++){ // 如果子菜单红包含子菜单就调用递归去遍历
    //                     if(sonMenu.children[j].children && sonMenu.children[j].children.length > 0){
    //                         sonMenuArr.push(setSon(sonMenu.children[j]));
    //                     }else{ // 没有再次包含子菜单就直接设置
    //                         _self.componentArr.push({path:sonMenu.children[j].path,component:sonMenu.children[j].component}); // 获取菜单数据的路径和组件
    //                         sonMenuArr.push(<Menu.Item key={sonMenu.children[j].title}><Link to={sonMenu.children[j].path}><Icon type={sonMenu.children[j].icon} />{sonMenu.children[j].title}</Link></Menu.Item>);
    //                     }
    //                 }
    //                 // 返回该层级的顶层子菜单
    //                 return <SubMenu key={sonMenu.title} title={<span><Icon type={sonMenu.icon} /><span className="nav-text">{sonMenu.title}</span></span>} >{sonMenuArr}</SubMenu>
    //             })(obj[i]);
    //             arr.push(templeMenu);
    //         }else{ // 没有子菜单
    //             _self.componentArr.push({path:obj[i].path,component:obj[i].component}); // 获取菜单数据的路径和组件
    //             arr.push(<Menu.Item key={obj[i].title}><Link to={obj[i].path}><Icon type={obj[i].icon} />{obj[i].title}</Link></Menu.Item>);
    //         }
    //     }
    //     return arr;
    // }
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
                            <Redirect to="/index/modifyPwd" />
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