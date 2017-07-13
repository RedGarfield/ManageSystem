import React from 'react';
import ReactDOM from 'react-dom';
//引入react-router
import {Route, Link } from 'react-router-dom'

import { Card, Col, Row, Breadcrumb, Form, Input, Button, Icon, Table, Popconfirm, message } from 'antd';
import moment from "moment";

const FormItem = Form.Item;

class UserListPage extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			dataarr: [],
			visible: false,
		}
	}
	componentWillMount(){
		let obj = { key:"" };
		this.initData(obj);
	}
	handleSubmit = (e) => { // 提交搜索表单
		e.preventDefault();
		let that = this;
		that.props.form.validateFields((err, values) => {
			if (!err) {
				let obj = { key:""};
				if(values.key){
					obj.key = values.key;
				}
				that.initData(obj);
			}
		});
	}
	initData = (obj) => {
		let self = this;
        fetch(__dirname+'user/list', {
            method: 'POST',
			headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
			body: JSON.stringify(obj),
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
	confirm = (id) => {
		let self = this;
		fetch(__dirname+'user/del', {
            method: 'POST',
			headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify({id: id}),
        }).then(function(res){
            return res.json().then(function(data){ // 获取服务器返回的json对象
                return data;
            });
        }).then(function(data){
			self.initData({ key:"" });
			message.success('删除成功！');
        }).catch(function(e){
			self.initData({ key:"" });
			message.success('删除成功！');
        });
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
			title: '修改人',
			dataIndex: 'editperson',
			width: 150
		}, {
			title: '修改时间',
			dataIndex: 'edittime',
			width: 150,
			render(event){
				let result = moment(event),
					year = result.get("year"),
					month = result.get("month")+1,
					day = result.get("date");
				return year+"-"+((month < 10)?"0"+month:month)+"-"+((day<10)?"0"+day:day);
			}
		}, {
			title: '启用状态',
			dataIndex: 'isuse',
			width: 150,
			render(event){
				let color = "color-red";
				let word = "禁用";
				if(event === true){
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
						<Link to={{pathname: "/index/userEdit", state:{id:event._id}}}><Button size="large" type="primary"><Icon type="edit" />编辑</Button></Link>
			    		<Popconfirm placement="bottomRight" title="删除后不可恢复，确定删除吗？" onConfirm={obj.confirm.bind(obj, event._id)} okText="确定" cancelText="放弃">
							<Button size="large" type="primary"><Icon type="close" />删除</Button>
						</Popconfirm>
			    	</div>
		    	)
			}
		}]
	}
	render(){
		const { getFieldDecorator } = this.props.form;
		const formItemLayout = {
      		labelCol: { xs: { span: 24 }, sm: { span: 7 }, },
		    wrapperCol: { xs: { span: 24 }, sm: { span: 17 }, },
    	};
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
								<Form onSubmit={this.handleSubmit} className="searchForm" layout="inline">
									<FormItem label="关键字" {...formItemLayout} >
										{getFieldDecorator('key', {
											rules: [{ required: false, whitespace: false }],
										})(
											<Input placeholder="请输入搜索关键字" />
										)}
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

const UserList = Form.create()(UserListPage);

export default UserList;