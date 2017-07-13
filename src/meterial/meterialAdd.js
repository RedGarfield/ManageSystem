import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'; // 引入react-router
import { Card, Row, Breadcrumb, Form, Button, Input, InputNumber, Col, Icon } from 'antd';

const FormItem = Form.Item;

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
    	return (
            <div className="panel">
                <Row>
                    <Col span={24}>
                        <Card bordered={false}>
                            <h2>用户列表</h2>
                            <Breadcrumb style={{ textAlign: 'right' }}>
                                <Breadcrumb.Item>首页</Breadcrumb.Item>
                                <Breadcrumb.Item>物料管理</Breadcrumb.Item>
                                <Breadcrumb.Item>物料设置</Breadcrumb.Item>
                                <Breadcrumb.Item>新增物料</Breadcrumb.Item>
                            </Breadcrumb>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <Card bordered={false}>
                            <Form onSubmit={this.handleSubmit}>
                                <Row>
                                    <FormItem label="物料名称" hasFeedback {...formItemLayout} >
                                        {getFieldDecorator('name', {
                                            rules: [{ required: true, message: '请输入物料名称!', whitespace:true, min: 1, max: 20 }]
                                        })(
                                            <Input />
                                        )}
                                    </FormItem>
                                </Row>
                                <Row>
                                    <FormItem label="单位" hasFeedback {...formItemLayout} >
                                        {getFieldDecorator('unit', {
                                            rules: [{ required: true, message: '请输入物料单位!', whitespace:true, min: 1, max: 20 }]
                                        })(
                                            <Input />
                                        )}
                                    </FormItem>
                                </Row>
                                <Row>
                                    <FormItem label="规格" hasFeedback {...formItemLayout} >
                                        {getFieldDecorator('spec', {
                                            rules: [{ required: true, message: '请输入物料规格!', whitespace:true, min: 1, max: 20 }]
                                        })(
                                            <Input />
                                        )}
                                    </FormItem>
                                </Row>
                                <Row>
                                    <FormItem label="库存" hasFeedback {...formItemLayout} >
                                        {getFieldDecorator('amount', {
                                            rules: [{ required: true, message: '请输入库存数量!' }]
                                        })(
                                            <InputNumber precision={0.1} min={0} max={50000} />
                                        )}
                                    </FormItem>
                                </Row>
                                <Row>
                                    <FormItem label="备注" hasFeedback {...formItemLayout} >
                                        {getFieldDecorator('remark', {
                                            rules: [{ message: '请输入备注信息!', whitespace:true, min: 1, max: 20 }]
                                        })(
                                            <Input />
                                        )}
                                    </FormItem>
                                </Row>
                                <Row>
                                    <FormItem wrapperCol={{ xs: { span: 24, offset: 0 }, sm: { span: 16, offset: 8 } }}>
                                        <Link to="/index/meterialList"><Button size="large"><Icon type="rollback" />返回</Button></Link>
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