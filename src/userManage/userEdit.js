import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { Card, Row, Breadcrumb, Form, Button, Input, Col, Select, Switch, Icon, Message } from 'antd';

import MyTimePicker from '../common/MyTimePicker.js'

const FormItem = Form.Item;
const Option = Select.Option;

class UserEditForm extends React.Component {
    constructor(props){
        super(props);
        this._id = props.location.state.id;
        this.state = {
            username:"",
            loginname:"",
            password:"",
            rolename:"",
            isuse:null,
        }
    }
    componentWillMount(){;
        let obj = this
        fetch(__dirname+"user/edit",{
            method: 'POST',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify({id: obj._id}),
        }).then(function(res){
            return res.json().then(function(data){ // 获取服务器返回的json对象
                return data;
            });
        }).then(function(data){
            let result = data.data;
            obj.setState({
                username: result.username,
                loginname: result.loginname,
                password: result.password,
                rolename: result.rolename,
                isuse: (result.isuse === 1)?true:false,
            });
        }).catch(function(e){
            console.error(e);
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => { // 提交表单
            if (!err) {
                console.log(values);
            }
        });
    }
    handleChange = (value) => {
        this.setState({
            rolename:value
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
                                <Breadcrumb.Item>编辑用户</Breadcrumb.Item>
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
                                            rules: [{ required: true, message: '请输入用户名称!', whitespace:true, min: 6, max: 20 }], 
                                            initialValue: this.state.username
                                        })(
                                            <Input />
                                        )}
                                    </FormItem>
                                </Row>
                                <Row>
                                    <FormItem label="登录名称" hasFeedback {...formItemLayout} >
                                        {getFieldDecorator('loginname', {
                                            rules: [{ required: true, message: '请输入登录名称!', whitespace:true, min: 6, max: 20 }],
                                            initialValue: this.state.loginname
                                        })(
                                            <Input />
                                        )}
                                    </FormItem>
                                </Row>
                                <Row>
                                    <FormItem label="密码" hasFeedback {...formItemLayout} >
                                        {getFieldDecorator('password', {
                                            rules: [{ required: true, message: '请输入密码!', whitespace:true, min: 6, max: 20 }],
                                            initialValue: this.state.password
                                        })(
                                            <Input type="password" />
                                        )}
                                    </FormItem>
                                </Row>
                                <Row>
                                    <Col span={12}>
                                        <FormItem label="所属角色" {...specialItemLayout} >
                                            {getFieldDecorator('rolename', {
                                                rules: [{ required: true }], valuePropName: "selected", 
                                                initialValue: this.state.rolename
                                            })(
                                                <Select value={this.state.rolename} onChange={this.handleChange.bind(this)}>
                                                    <Option value="超级管理员">超级管理员</Option>
                                                    <Option value="管理员">管理员</Option>
                                                </Select>
                                            )}
                                        </FormItem>
                                    </Col>
                                    <Col span={12}>
                                        <FormItem label="启用状态" {...specialItemLayout} >
                                            {getFieldDecorator('isopen', {
                                                valuePropName: "checked", initialValue: this.state.isuse
                                            })(
                                                <Switch checkedChildren={'开'} unCheckedChildren={'关'} />
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

const UserEdit = Form.create()(UserEditForm);

export default UserEdit;