import React from 'react';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import { Form, Icon, Input, Button, Checkbox, Spin, Modal } from 'antd';

const FormItem = Form.Item;


class Login extends React.Component {
    constructor(props){
        super(props);
    }
    state = {
        loading: false
    }
    handleSubmit = (e) => {
        e.preventDefault();
        let self = this;
        self.props.form.validateFields((err, values) => {
            if (!err) {
                self.setState({loading: true});// 打开登录旋转
                fetch(__dirname+'main?username='+values.userName+'&password='+values.password, {
                    method: 'POST',
                }).then(function(res){
                    return res.json().then(function(data){ // 获取服务器返回的json对象
                        return data;
                    });
                }).then(function(data){
                    if(data.success === true){ // 如果验证用户信息正确，就跳转到主页面
                        self.props.history.push("/main");
                    }else{
                        self.setState({loading: false});// 关闭登录旋转
                        self.showModal(data.message);
                    }
                }).catch(function(e){
                    console.error(e);
                    self.setState({loading: false});// 关闭登录旋转
                });
            }
        });
    }
    showModal = (message) => {
        Modal.error({
            title: '系统提示',
            content: message
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Spin spinning={this.state.loading} tip="正在登录...">
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <FormItem>
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: '请输入账号!' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="请输入账号!" />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: '请输入密码!' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="请输入密码!" />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(
                            <Checkbox>记住密码</Checkbox>
                        )}
                        <Button type="primary" htmlType="submit" className="login-form-button">登录</Button>
                    </FormItem>
                </Form>
            </Spin>
        );
    }
}

const LoginForm = Form.create()(Login);

export default LoginForm;