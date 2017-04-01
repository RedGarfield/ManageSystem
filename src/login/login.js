import React from 'react';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import 'antd/dist/antd';

import { Form, Icon, Input, Button, Checkbox } from 'antd';

const path = require("path");

const FormItem = Form.Item;


class Login extends React.Component {
  constructor(props){
    super(props);
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // console.log('Received values of form: ', values);
        // console.log(this.props.history.push("/main"));
        // this.props.history.push("/main");
        fetch(__dirname+'/main?'+JSON.stringfy(values)).then(function(res){
          console.log(res.json());
        }).then(function(data){
          console.log(data);
        }).catch(function(e){
          console.err(e);
        })
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
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
    );
  }
}

const LoginForm = Form.create()(Login);

export default LoginForm;