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
    width: 100,
    render: () => <div>
    	<Button type="primary" ><Icon type="search" />查看</Button>
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

class Syslog extends React.Component{
	constructor(props){
		super(props);
	}
	state = {
		getDataArr:[]
	}
	componentWillMount(){ // 请求数据
		let self = this;
        fetch(__dirname+'query/sysLogList', {
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
						    <Table rowSelection={rowSelection} columns={columns} size="small" dataSource={this.state.getDataArr} pagination={{ pageSize: 15 }} />
						</Card>
					</Col>
				</Row>
			</div>
		)
	}
}

export default Syslog;