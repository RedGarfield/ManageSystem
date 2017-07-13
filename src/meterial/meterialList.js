import React from 'react';
import ReactDOM from 'react-dom';
//引入react-router
import {Route, Link } from 'react-router-dom'

import { Card, Col, Row, Breadcrumb, Form, Input, Button, Icon, Table, Popconfirm, message } from 'antd';

const FormItem = Form.Item;

class MeterialPage extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			dataarr: [],
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
	initData(obj){
		let self = this;
        fetch(__dirname+'meterial/list', {
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
	confirm(e) {
	  	message.success('删除成功！')
	}
	getColumns() {
		let obj = this;
		return [{
			title: '物料名称',
			dataIndex: 'name',
			width: 150
		}, {
			title: '单位',
			dataIndex: 'unit',
			width: 150
		}, {
			title: '规格',
			dataIndex: 'spec',
			width: 150
		}, {
			title: '库存',
			dataIndex: 'amount',
			width: 150
		}, {
			title: '备注',
			dataIndex: 'remark',
			width: 150
		}, {
			title: '修改用户',
			dataIndex: 'editname',
			width: 150
		}, {
			title: '修改时间',
			dataIndex: 'edittime',
			width: 150
		}, {
		    title: '操作',
		    key: 'operation',
		    width: 300,
		    render(event){
		    	return(
			    	<div>
						<Link to={{pathname: "/index/meterialEdit", state:{id:event.id}}}><Button size="large" type="primary"><Icon type="edit" />编辑</Button></Link>
			    		<Popconfirm placement="bottomRight" title="删除后不可恢复，确定删除吗？" onConfirm={obj.confirm.bind(obj, event.id)} okText="确定" cancelText="放弃">
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
	                            <Breadcrumb.Item>物料管理</Breadcrumb.Item>
	                            <Breadcrumb.Item>物料设置</Breadcrumb.Item>
	                            <Breadcrumb.Item>物料列表</Breadcrumb.Item>
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
								<Link to="/index/meterialAdd"><Button type="primary" className="ant-card-rightBtn"><Icon type="plus" />添加物料</Button></Link>
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

const MeterialList = Form.create()(MeterialPage);
export default MeterialList;