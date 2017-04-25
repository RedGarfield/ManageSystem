import React from 'react';
import ReactDOM from 'react-dom';
import { Form, Button, Input, Card, Col, Row, Breadcrumb, Icon } from 'antd';

const FormItem = Form.Item;

class ModifyForm extends React.Component {
    constructor(props){
        super(props);
    }
    state = {
        
    }
	render() {
    	const { getFieldDecorator } = this.props.form;
    	return (
            <div className="panel">
                <Row>
                    <Col span={24}>
                        <Card bordered={false}>
                            <h2>用户管理</h2>
                            <Breadcrumb style={{ textAlign: 'right' }}>
                                <Breadcrumb.Item>首页</Breadcrumb.Item>
                                <Breadcrumb.Item>用户管理</Breadcrumb.Item>
                                <Breadcrumb.Item>修改密码</Breadcrumb.Item>
                            </Breadcrumb>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <Card bordered={false}>
                            <Form onSubmit={this.handleSubmit} layout="vertical">
                                <FormItem label="当前密码：" >
                                    <Input type="password" placeholder="请输入您的当前密码" />
                                </FormItem>
                                <FormItem label="新密码：" >
                                    <Input type="password" placeholder="请输入新密码" />
                                </FormItem>
                                <FormItem label="确认新密码：">
                                    <Input type="password" placeholder="请再次确认密码" />
                                </FormItem>
                                <FormItem>
                                    <Button type="primary" htmlType="submit" size="large"><Icon type="file" />保存</Button>
                                    <Button htmlType="submit" size="large"><Icon type="reload" />重置</Button>
                                </FormItem>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </div>
    	);
  	}
}

const ModifyPwd = Form.create()(ModifyForm);

export default ModifyPwd;