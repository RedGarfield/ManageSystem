import React from 'react';
import ReactDOM from 'react-dom';
//引入react-router
import {Route, Link } from 'react-router-dom'

import { Card, Col, Row, Breadcrumb, Form, Input, Button, Icon, Table, Popconfirm, message } from 'antd';

const FormItem = Form.Item;

class MeterialPage extends React.Component{
	constructor(props){
		super(props)
	}
	state = {
		dataarr: [],
		addvisible: false,
        editvisible: false,
	}
	confirm(e) {
	  	message.success('删除成功！')
	}
	getColumns() {
		let obj = this;
		return [{
			title: '物料名称',
			dataIndex: 'meterialname',
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
			dataIndex: 'storage',
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
						<Link to="/index/meterialEdit"><Button size="large" type="primary"><Icon type="edit" />编辑</Button></Link>
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
        fetch(__dirname+'meterial/list', {
            method: 'POST',
        }).then(function(res){
            return res.json().then(function(data){ // 获取服务器返回的json对象
                return data;
            });
        }).then(function(data){
			self.setState({dataarr: data.data});
            // if(data.isLogin === true){ // 如果验证用户信息正确，就跳转到主页面
            //     self.setState({"getDataArr": data.list});
            // }else{
            //     self.props.history.push("/"); // 未登录跳转登录
            // }
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