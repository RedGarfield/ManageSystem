import React from 'react';
import ReactDOM from 'react-dom';
//引入react-router
import {Route, Link } from 'react-router-dom'

import { Card, Col, Row, Breadcrumb, Form, Input, Button, Icon, Table } from 'antd';

const FormItem = Form.Item;

const columns = [{
	title: 'Name',
	dataIndex: 'name',
	width: 150
}, {
	title: 'Age',
	dataIndex: 'age',
	width: 150,
}, {
	title: 'Address',
	dataIndex: 'address',
},{
    title: 'Action',
    key: 'operation',
    width: 200,
    render: () => <div>
    	<Button type="primary" ><Icon type="search" />查看</Button>
		<Button type="warning" ><Icon type="edit" />修改</Button>
    </div>,
}];

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  onSelect: (record, selected, selectedRows) => {
    console.log(record, selected, selectedRows);
  },
  onSelectAll: (selected, selectedRows, changeRows) => {
    console.log(selected, selectedRows, changeRows);
  },
  getCheckboxProps: record => ({
    disabled: record.name === 'Disabled User',    // Column configuration not to be checked
  }),
};

const data = [];
for (let i = 0; i < 3; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

class Syslog extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div className="panel">
				<Row>
					<Col span={24}>
						<Card bordered={false}>
						    <h2>日志管理</h2>
	                        <Breadcrumb style={{ textAlign: 'right' }}>
	                            <Breadcrumb.Item>首页</Breadcrumb.Item>
	                            <Breadcrumb.Item>日志管理</Breadcrumb.Item>
	                            <Breadcrumb.Item>日志查询</Breadcrumb.Item>
	                        </Breadcrumb>
						</Card>
					</Col>
				</Row>
				<Row>
					<Col span={24}>
						<Card bordered={false}>
							<Form className="searchForm" layout="inline">
						        <FormItem>
						        	<Input placeholder="请输入搜索关键字" />
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
						    <Table rowSelection={rowSelection} columns={columns} size="middle" dataSource={data} pagination={{ pageSize: 15 }} />
						</Card>
					</Col>
				</Row>
			</div>
		)
	}
}

export default Syslog;