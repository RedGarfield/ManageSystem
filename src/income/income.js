import React from 'react';
import ReactDOM from 'react-dom';
//引入react-router
import {Route, Link } from 'react-router-dom'

import { Card, Col, Row, Breadcrumb, Form, Input, Button, Icon, DatePicker } from 'antd';

const FormItem = Form.Item;
const { RangePicker } = DatePicker;

class IncomePage extends React.Component{
	constructor(props){
		super(props);
	}
	componentWillMount(){ // render前加载数据
		
	}
	handleSubmit = (e) => { // 提交搜索表单
		e.preventDefault();
		let that = this;
		that.props.form.validateFields((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values);
				// that.initList();
			}
		});
	}
	initList(){ // 请求数据

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
						    <h2>物料入库报表</h2>
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
							<Form onSubmit={this.handleSubmit} className="searchForm" layout="inline">
								<FormItem label="关键字" {...formItemLayout} >
									{getFieldDecorator('key', {
										 rules: [{ required: false, whitespace: false }],
									})(
										<Input placeholder="请输入搜索关键字" />
									)}
								</FormItem>
								<FormItem label="日期" {...formItemLayout} >
									{getFieldDecorator('date', {
										 rules: [{ required: false }],
									})(
										<RangePicker format="YYYY-MM-DD" />
									)}
								</FormItem>
								<FormItem>
									<Button type="primary" htmlType="submit" ><Icon type='search' />搜索</Button>
								</FormItem>
							</Form>
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

const Income = Form.create()(IncomePage);

export default Income;