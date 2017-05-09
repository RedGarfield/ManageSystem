import React from 'react';
import ReactDOM from 'react-dom';
import { Card, Row, Breadcrumb, Form, Button, Input, Col, Select, Switch, Upload, Icon, Message } from 'antd';

import MyTimePicker from '../common/MyTimePicker.js'

const FormItem = Form.Item;
const Option = Select.Option;

class MenuTopAddForm extends React.Component {
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
      		labelCol: { xs: { span: 24 }, sm: { span: 3 }, },
		    wrapperCol: { xs: { span: 24 }, sm: { span: 21 }, },
    	};
        const specialItemLayout = {
            labelCol: { xs: { span: 24 }, sm: { span: 6 }, },
            wrapperCol: { xs: { span: 24 }, sm: { span: 18 }, },
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
                            <h2>新建顶级菜单</h2>
                            <Breadcrumb style={{ textAlign: 'right' }}>
                                <Breadcrumb.Item>首页</Breadcrumb.Item>
                                <Breadcrumb.Item>系统管理</Breadcrumb.Item>
                                <Breadcrumb.Item>菜单管理</Breadcrumb.Item>
                                <Breadcrumb.Item>新建顶级菜单</Breadcrumb.Item>
                            </Breadcrumb>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <Card bordered={false}>
                            <Form className="w90 mr-auto" onSubmit={this.handleSubmit}>
                                <Row>
                                    <Col span={24}>
                                        <FormItem label="父级菜单" hasFeedback {...formItemLayout} >
                                            {getFieldDecorator('parentmenu', {
                                                rules: [{ message: '请输入功能菜单名称!' }],
                                                initialValue: "父级菜单"
                                            })(
                                                <Input readOnly className="ele-read-only" value="父级菜单" />
                                            )}
                                        </FormItem>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={24}>
                                        <FormItem label="名称" hasFeedback {...formItemLayout} >
                                            {getFieldDecorator('menuname', {
                                                rules: [{ required: true, message: '请输入菜单名称!', whitespace:true }]
                                            })(
                                                <Input placeholder="请输入菜单名称" />
                                            )}
                                        </FormItem>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={24}>
                                        <FormItem label="链接" hasFeedback {...formItemLayout} >
                                            {getFieldDecorator('menuurl', {
                                                rules: [{ required: true, message: '请输入菜单链接!', whitespace:true }]
                                            })(
                                                <Input placeholder="请输入菜单链接" />
                                            )}
                                        </FormItem>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={24}>
                                        <FormItem label="实验时间" hasFeedback {...formItemLayout} >
                                            {getFieldDecorator('time', {
                                                rules: [{ required: true, message: '请选择菜单图标!', whitespace:true }]
                                            })(
                                                <MyTimePicker /> 
                                            )}
                                        </FormItem>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={12}>
                                        <FormItem label="是否可用" hasFeedback {...specialItemLayout} >
                                            {getFieldDecorator('isuse', {
                                                rules: [{ required: true }], valuePropName: "checked", initialValue: true
                                            })(
                                                <Switch defaultChecked={true} />
                                            )}
                                        </FormItem>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={24}>
                                        <FormItem label="权限字符" hasFeedback {...formItemLayout} >
                                            {getFieldDecorator('menuurl', {
                                                rules: [{ message: '请输入权限字符名称!', whitespace:true }]
                                            })(
                                                <Input placeholder="请输入权限字符名称" />
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

const MenuTopAdd = Form.create()(MenuTopAddForm);

export default MenuTopAdd;