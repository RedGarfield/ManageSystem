import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Link } from 'react-router-dom'

import { Card, Col, Row, Breadcrumb, Form, Input, Button, Icon, Table, Modal, Popconfirm, message, Spin } from 'antd';

const FormItem = Form.Item;

class RoleManage extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			getDataArr: [],
			visible: false,
        	loading: false
		}
	}
	confirm = (e) => {
	  message.success('删除成功！');
	}
	cancel = (e) => {
	  message.error('删除失败！');
	}
	getColumns = () => {
		let obj = this;
		return [{
			title: '角色名称',
			dataIndex: 'rolename',
			width: 150
		}, {
			title: '备注',
			dataIndex: 'remark',
			width: 150
		}, {
		    title: '操作',
		    key: 'operation',
		    width: 300,
		    render(event){
		    	return(
			    	<div>
						<Button type="primary" onClick={obj.showModal.bind(obj,event)}><Icon type="search" />修改</Button>
			    		<Popconfirm placement="bottomRight" title="删除后不可恢复，确定删除吗？" onConfirm={obj.confirm} onCancel={obj.cancel} okText="确定" cancelText="放弃">
							<Button type="primary"><Icon type="close" />删除</Button>
						</Popconfirm>
			    	</div>
		    	)
			}
		}]
	}
	showModal = (event) => {
	    this.setState({ visible: true });
	}
	handleCancel = (e) => {
	    this.setState({
	      	visible: false,
	    });
	}
	loadData = () => {
		fetch(__dirname+'system/rolelist', {
            method: 'POST',
        }).then(function(res){
            return res.json().then(function(data){ // 获取服务器返回的json对象
                return data;
            });
        }).then(function(data){
            if(data.isLogin === true){ // 如果验证用户信息正确，就跳转到主页面
                self.setState({"getDataArr": data.list});
            }else{
                self.props.history.push("/"); // 未登录跳转登录
            }
        }).catch(function(e){
            console.error(e);
            self.props.history.push("/"); // 出错或者超时跳转登录
        });
	}
    handleAdd = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                fetch(__dirname+'system/addrole', {
		            method: 'POST',
                    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
                    body: JSON.stringify(values)
		        }).then(function(res){
		            return res.json().then(function(data){ // 获取服务器返回的json对象
		                return data;
		            });
		        }).then(function(data){
		            if(data.isLogin === true){ // 如果验证用户信息正确，就跳转到主页面
		                // self.setState({"getDataArr": data.list});
		            }else{
		                self.props.history.push("/"); // 未登录跳转登录
		            }
		        }).catch(function(e){
		            console.error(e);
		            self.props.history.push("/"); // 出错或者超时跳转登录
		        });
            }
        });
    }
	componentWillMount(){ // 请求数据
		this.loadData();        
	}
	render(){
    	const { getFieldDecorator } = this.props.form;
    	const formItemLayout = {
      		labelCol: { xs: { span: 24 }, sm: { span: 4 }, },
		    wrapperCol: { xs: { span: 24 }, sm: { span: 20 }, },
    	};
		return(
            <Spin spinning={this.state.loading} tip="正在...">
				<div className="panel">
					<Row>
						<Col span={24}>
							<Card bordered={false}>
							    <h2>角色列表</h2>
		                        <Breadcrumb style={{ textAlign: 'right' }}>
		                            <Breadcrumb.Item>首页</Breadcrumb.Item>
		                            <Breadcrumb.Item>系统管理</Breadcrumb.Item>
		                            <Breadcrumb.Item>角色管理</Breadcrumb.Item>
		                            <Breadcrumb.Item>角色列表</Breadcrumb.Item>
		                        </Breadcrumb>
							</Card>
						</Col>
					</Row>
					<Row>
						<Col span={24}>
							<Card bordered={false}>
								<Button type="primary" className="ant-card-rightBtn" onClick={this.showModal}><Icon type="plus" />新增角色</Button>
							</Card>
						</Col>
					</Row>
					<Row>
						<Col span={24}>
							<Card bordered={false}>
							    <Table columns={this.getColumns()} size="small" dataSource={this.state.getDataArr} />
							</Card>
						</Col>
					</Row>
			        <Modal title="新增角色" visible={this.state.visible} footer={null} onCancel={this.handleCancel}>
			        	<Form onSubmit={this.handleAdd} layout="vertical">
	                        <FormItem label="角色名称：" {...formItemLayout}>
	                            {getFieldDecorator('rolename', {
	                                rules: [{ required: true, message: '请输入角色名称!', min: 2, max: 10, whitespace:true }]
	                            })(
	                                <Input />
	                            )}
	                        </FormItem>
	                        <FormItem label="备注：" {...formItemLayout}>
	                            {getFieldDecorator('remark', {
	                                rules: [{ message: '请输入备注!' }]
	                            })(
	                                <Input />
	                            )}
	                        </FormItem>
	                        <FormItem wrapperCol={{ xs: { span: 24, offset: 0 }, sm: { span: 16, offset: 8 } }}>
	                            <Button type="primary" htmlType="submit" size="large"><Icon type="file" />保存</Button>
	                            <Button htmlType="submit" size="large"><Icon type="reload" />重置</Button>
	                        </FormItem>
	                    </Form>
			        </Modal>
		        </div>
            </Spin>
		)
	}
}

var RoleList = Form.create()(RoleManage);

export default RoleList;