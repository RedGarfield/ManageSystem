import React from 'react';
import ReactDOM from 'react-dom';
import { Card, Row, Breadcrumb, Form, Button, Input, Col, Select, Switch, Upload, Icon } from 'antd';

import MyTimePicker from '../common/MyTimePicker.js'

const FormItem = Form.Item;
const Option = Select.Option;

class UserAddForm extends React.Component {
    constructor(props){
        super(props);
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }
	render() {
    	const { getFieldDecorator } = this.props.form;
    	const formItemLayout = {
      		labelCol: { xs: { span: 24 }, sm: { span: 2 }, },
		    wrapperCol: { xs: { span: 24 }, m: { span: 22 }, },
    	};
        const specialItemLayout = {
            labelCol: { xs: { span: 24 }, sm: { span: 6 }, },
            wrapperCol: { xs: { span: 24 }, sm: { span: 18 }, },
        };
    	const config = {
      		rules: [{ type: 'object', required: true, message: '请选择时间!' }]
    	};
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
                                <Breadcrumb.Item>添加用户</Breadcrumb.Item>
                            </Breadcrumb>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <Card bordered={false}>
                            <Form onSubmit={this.handleSubmit}>
                                <Row>
                                    <Col span={24}>
                                        <FormItem>
                                            <Upload className="avatar-uploader" name="avatar" showUploadList={false} >
                                            {
                                                <Icon type="user" className="avatar-uploader-trigger" />
                                            }
                                            </Upload>
                                        </FormItem>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={24}>
                                        <FormItem label="登录名" hasFeedback {...formItemLayout} >
                                            {getFieldDecorator('loginname', {
                                                rules: [{ required: true, message: '请输入登录名!', whitespace:true }]
                                            })(
                                                <Input />
                                            )}
                                        </FormItem>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={24}>
                                        <FormItem label="姓名" hasFeedback {...formItemLayout} >
                                            {getFieldDecorator('username', {
                                                rules: [{ required: true, message: '请输入姓名!', whitespace:true }]
                                            })(
                                                <Input />
                                            )}
                                        </FormItem>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={24}>
                                        <FormItem label="密码" hasFeedback {...formItemLayout} >
                                            {getFieldDecorator('password', {
                                                rules: [{ required: true, message: '请输入密码!', whitespace:true }]
                                            })(
                                                <Input type="password" />
                                            )}
                                        </FormItem>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={8}>
                                        <FormItem label="归属诊所" hasFeedback {...specialItemLayout} >
                                            {getFieldDecorator('zs', {
                                                rules: [{ required: true }], valuePropName: "selected", initialValue: "lucy"
                                            })(
                                                <Select defaultValue="lucy">
                                                    <Option value="jack">Jack</Option>
                                                    <Option value="lucy">Lucy</Option>
                                                    <Option value="Yiminghe">yiminghe</Option>
                                                </Select>
                                            )}
                                        </FormItem>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={8}>
                                        <FormItem label="角色" hasFeedback {...specialItemLayout} >
                                            {getFieldDecorator('role', {
                                                rules: [{ required: true }], valuePropName: "selected", initialValue: "lucy"
                                            })(
                                                <Select defaultValue="lucy">
                                                    <Option value="jack">Jack</Option>
                                                    <Option value="lucy">Lucy</Option>
                                                    <Option value="Yiminghe">yiminghe</Option>
                                                </Select>
                                            )}
                                        </FormItem>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={8}>
                                        <FormItem label="是否可登录" hasFeedback {...specialItemLayout} >
                                            {getFieldDecorator('isLogin', {
                                                rules: [{ required: true }], valuePropName: "checked", initialValue: false
                                            })(
                                                <Switch defaultChecked={false} />
                                            )}
                                        </FormItem>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={24}>
                                        <FormItem wrapperCol={{ xs: { span: 24, offset: 0 }, sm: { span: 16, offset: 8 } }}>
                                            <Button type="primary" htmlType="submit"><Icon type="file" />保存</Button>
                                            <Button><Icon type="reload" />返回</Button>
                                        </FormItem>
                                    </Col>
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