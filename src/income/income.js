import React from 'react';
import ReactDOM from 'react-dom';
//引入react-router
import {Route, Link } from 'react-router-dom'

import { Card, Col, Row, Breadcrumb, Form, Input, Button, Icon, Modal, Popconfirm, message } from 'antd';

const FormItem = Form.Item;

class Income extends React.Component{
	constructor(props){
		super(props);
	}
	componentWillMount(){ // 请求数据
		
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
	                            <Breadcrumb.Item>物料设置</Breadcrumb.Item>
	                            <Breadcrumb.Item>物料入库报表</Breadcrumb.Item>
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
						    
						</Card>
					</Col>
				</Row>
			</div>
		)
	}
}
export default Income;