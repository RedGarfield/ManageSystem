import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'; // 引入react-router
import { Card, Row, Breadcrumb, Form, Button, Input, Col, Select, Checkbox, Icon, Message } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;

class UserAddForm extends React.Component {
    constructor(props){
        super(props);
    }
    handleSubmit = (e) => {
        e.preventDefault();
        let self = this;
        this.props.form.validateFields((err, values) => { // 提交表单
            if (!err) {
                fetch(__dirname+'user/saveAdd', {
                    method: 'POST',
                    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
                    body: JSON.stringify(values),
                }).then(function(res){
                    return res.json().then(function(data){ // 获取服务器返回的json对象
                        return data;
                    });
                }).then(function(data){
                    console.log(data);
                    self.props.history.push("/index/userList");
                }).catch(function(e){
                    console.error(e);
                    // self.setState({dataarr: []});
                });
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
                                <Breadcrumb.Item>新增用户</Breadcrumb.Item>
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
                                            rules: [{ required: true, message: '请输入用户名称!', whitespace:true, min: 2, max: 20 }]
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
                                        <FormItem label="所属角色" {...specialItemLayout} >
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
                                        <FormItem label="启用状态" {...specialItemLayout} >
                                            {getFieldDecorator('isuse', {
                                                valuePropName: "checked", initialValue: true
                                            })(
                                               <Checkbox defaultChecked={true} /> 
                                            )}
                                        </FormItem>
                                    </Col>
                                </Row>
                                <Row>
                                    <FormItem wrapperCol={{ xs: { span: 24, offset: 0 }, sm: { span: 16, offset: 8 } }}>
                                        <Link to="/index/userList"><Button size="large"><Icon type="rollback" />返回</Button></Link>
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