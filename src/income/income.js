import React from 'react';
import ReactDOM from 'react-dom';
//引入react-router
import {Route, Link } from 'react-router-dom'

import { Card, Col, Row, Breadcrumb, Form, Input, Button, Icon, DatePicker } from 'antd';

import { PieChart } from '../common/PieChart';

const FormItem = Form.Item;
const { RangePicker } = DatePicker;

class IncomePage extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			data:[],
		}
	}
	componentWillMount(){
		let obj = { key:"", sdate:"", edate:"" };
		this.initData(obj);
	}
	handleSubmit = (e) => { // 提交搜索表单
		e.preventDefault();
		let that = this;
		that.props.form.validateFields((err, values) => {
			if (!err) {
				let obj = { key:"", sdate:"", edate:"" };
				if(values.key){
					obj.key = values.key;
				}
				if(values.date){
					obj.sdate = values.date[0].format("YYYY-MM-DD");
					obj.edate = values.date[1].format("YYYY-MM-DD");
				}
				that.initData(obj);
			}
		});
	}
	initData = (obj) => { // 请求数据
		let self = this;
		fetch(__dirname+'income/query', {
			method: 'POST',
			headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
			body: JSON.stringify(obj),
		}).then(function(res){
			return res.json().then(function(data){ // 获取服务器返回的json对象
				return data;
			});
		}).then(function(data){
			self.setState({data: data.data});
		}).catch(function(e){
			console.error(e);
			self.setState({data: []});
		});
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
										<RangePicker allowClear={true} format="YYYY-MM-DD" />
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
							{this.state.data.length === 0?<h2>暂无数据</h2>:<PieChart data={this.state.data} />}							
						</Card>
					</Col>
				</Row>
			</div>
		)
	}
}

const Income = Form.create()(IncomePage);

export default Income;