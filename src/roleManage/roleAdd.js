import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'; // 引入react-router
import { Card, Row, Breadcrumb, Form, Button, Input, Col, Select, Switch, Icon, Message } from 'antd';

import MyTimePicker from '../common/MyTimePicker.js'

const FormItem = Form.Item;
const Option = Select.Option;

class UserAddForm extends React.Component {
    constructor(props){
        super(props);
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => { // 提交表单
            if (!err) {
                
            }
        });
    }
	render() {
    	const { getFieldDecorator } = this.props.form;
    	const formItemLayout = {
      		labelCol: { xs: { span: 24 }, sm: { span: 3 }, },
		    wrapperCol: { xs: { span: 24 }, sm: { span: 20 }, },
    	};
        const specialItemLayout = {
            labelCol: { xs: { span: 24 }, sm: { span: 6 }, },
            wrapperCol: { xs: { span: 24 }, sm: { span: 16 }, },
        };
    	const config = {
      		rules: [{ type: 'object', required: true, message: '请选择时间!' }]
    	};
        const _path = __dirname;
    	return (
            <div className="panel">
                <Row>
                    <Col span={24}>
                        <Card bordered={false}>
                            <h2>用户列表</h2>
                            <Breadcrumb style={{ textAlign: 'right' }}>
                                <Breadcrumb.Item>首页</Breadcrumb.Item>
                                <Breadcrumb.Item>系统管理</Breadcrumb.Item>
                                <Breadcrumb.Item>用户管理</Breadcrumb.Item>
                                <Breadcrumb.Item>新增角色</Breadcrumb.Item>
                            </Breadcrumb>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <Card bordered={false}>
                            <Form onSubmit={this.handleSubmit}>
                                <Row>
                                    <FormItem label="用户姓名" hasFeedback {...formItemLayout} >
                                        {getFieldDecorator('username', {
                                            rules: [{ required: true, message: '请输入用户名称!', whitespace:true, min: 6, max: 20 }]
                                        })(
                                            <Input />
                                        )}
                                    </FormItem>
                                </Row>
                                <Row>
                                    <FormItem label="登录名称" hasFeedback {...formItemLayout} >
                                        {getFieldDecorator('loginname', {
                                            rules: [{ required: true, message: '请输入登录名称!', whitespace:true, min: 6, max: 20 }]
                                        })(
                                            <Input />
                                        )}
                                    </FormItem>
                                </Row>
                                <Row>
                                    <FormItem label="密码" hasFeedback {...formItemLayout} >
                                        {getFieldDecorator('password', {
                                            rules: [{ required: true, message: '请输入密码!', whitespace:true, min: 6, max: 20 }]
                                        })(
                                            <Input type="password" />
                                        )}
                                    </FormItem>
                                </Row>
                                <Row>
                                    <Col span={12}>
                                        <FormItem label="所属角色" hasFeedback {...specialItemLayout} >
                                            {getFieldDecorator('rolename', {
                                                rules: [{ required: true }], valuePropName: "selected", initialValue: "管理员"
                                            })(
                                                <Select defaultValue="管理员">
                                                    <Option value="超级管理员">超级管理员</Option>
                                                    <Option value="管理员">管理员</Option>
                                                </Select>
                                            )}
                                        </FormItem>
                                    </Col>
                                    <Col span={12}>
                                        <FormItem label="启用状态" hasFeedback {...specialItemLayout} >
                                            {getFieldDecorator('isopen', {
                                                valuePropName: "checked", initialValue: true
                                            })(
                                                <Switch defaultChecked={false} checkedChildren={'开'} unCheckedChildren={'关'} />
                                            )}
                                        </FormItem>
                                    </Col>
                                </Row>
                                <Row>
                                    <FormItem wrapperCol={{ xs: { span: 24, offset: 0 }, sm: { span: 16, offset: 8 } }}>
                                        <Link to="/index/user"><Button size="large"><Icon type="rollback" />返回</Button></Link>
                                        <Button type="primary" htmlType="submit" size="large"><Icon type="file" />保存</Button>
                                    </FormItem>
                                </Row>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </div>
    	);
  	}
}

const UserAdd = Form.create()(UserAddForm);

export default UserAdd;