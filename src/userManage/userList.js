import React from 'react';
import ReactDOM from 'react-dom';
//引入react-router
import {Route, Link } from 'react-router-dom'

import { Card, Col, Row, Breadcrumb, Form, Input, Button, Icon, Table, Popconfirm, message } from 'antd';

const FormItem = Form.Item;

class UserList extends React.Component{
	constructor(props){
		super(props)
	}
	state = {
		dataarr: [],
		visible: false,
	}
	confirm(e) {
	  	message.success('删除成功！')
	}
	getColumns() {
		let obj = this;
		return [{
			title: '用户名称',
			dataIndex: 'username',
			width: 150
		}, {
			title: '登录名称',
			dataIndex: 'loginname',
			width: 150
		}, {
			title: '角色名称',
			dataIndex: 'rolename',
			width: 150
		}, {
			title: '启用状态',
			dataIndex: 'isuse',
			width: 150,
			render(event){
				let color = "color-red";
				let word = "禁用";
				if(event === 1){
					color = "color-green";
					word = "启用"
				}
				return <div className={color} >{word}</div>;	
			}
		}, {
		    title: '操作',
		    key: 'operation',
		    width: 300,
		    render(event){
		    	return(
			    	<div>
						<Link to={{pathname: "/index/userEdit/", state:{id:event.id}}}><Button size="large" type="primary"><Icon type="edit" />编辑</Button></Link>
			    		<Popconfirm placement="bottomRight" title="删除后不可恢复，确定删除吗？" onConfirm={obj.confirm.bind(obj, event.id)} okText="确定" cancelText="放弃">
							<Button size="large" type="primary"><Icon type="close" />删除</Button>
						</Popconfirm>
			    	</div>
		    	)
			}
		}]
	}
	componentWillMount(){ // 请求数据
		this.getData();
	}
	getData(){
		let self = this;
        fetch(__dirname+'user/list', {
            method: 'POST',
        }).then(function(res){
            return res.json().then(function(data){ // 获取服务器返回的json对象
                return data;
            });
        }).then(function(data){
			self.setState({dataarr: data.data});
        }).catch(function(e){
			console.error(e);
            self.setState({dataarr: []});
        });
	}
	render(){
		return(
			<div className="panel">
				<Row>
					<Col span={24}>
						<Card bordered={false}>
						    <h2>用户列表</h2>
	                        <Breadcrumb style={{ textAlign: 'right' }}>
	                            <Breadcrumb.Item>首页</Breadcrumb.Item>
	                            <Breadcrumb.Item>系统管理</Breadcrumb.Item>
	                            <Breadcrumb.Item>用户管理</Breadcrumb.Item>
	                            <Breadcrumb.Item>用户列表</Breadcrumb.Item>
	                        </Breadcrumb>
						</Card>
					</Col>
				</Row>
				<Row>
					<Col span={24}>
						<Card bordered={false}>
							<Col span={12}>
								<Form className="searchForm" layout="inline">
							        <FormItem>
							        	<Input placeholder="请输入搜索关键字" />
							        </FormItem>
							        <FormItem>
							        	<Button type="primary" htmlType="submit" ><Icon type='search' />搜索</Button>
							        </FormItem>
							    </Form>
							</Col>
							<Col span={12}>
								<Link to="/index/userAdd"><Button type="primary" className="ant-card-rightBtn"><Icon type="plus" />添加用户</Button></Link>
							</Col>
						</Card>
					</Col>
				</Row>
				<Row>
					<Col span={24}>
						<Card bordered={false}>
						    <Table columns={this.getColumns()} size="small" dataSource={this.state.dataarr} />
						</Card>
					</Col>
				</Row>
			</div>
		)
	}
}
export default UserList;