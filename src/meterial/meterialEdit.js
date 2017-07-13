import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { Card, Row, Breadcrumb, Form, Button, Input, InputNumber, Col, Icon } from 'antd';

const FormItem = Form.Item;

class UserEditForm extends React.Component {
    constructor(props){
        super(props);
        this._id = props.location.state.id;
        this.state = {
            name:"",
            unit:"",
            spec:"",
            amount:0,
            remark:"",
        }
    }
    componentWillMount(){
        let obj = this
        fetch(__dirname+"meterial/edit",{
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
                name: result.name,
                unit: result.unit,
                spec: result.spec,
                amount: result.amount,
                remark: result.remark,
            });
        }).catch(function(e){
            console.error(e);
        });
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
                                <Breadcrumb.Item>修改物料</Breadcrumb.Item>
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
                                            rules: [{ required: true, message: '请输入物料名称!', whitespace:true, min: 1, max: 20 }],
                                            initialValue: this.state.name
                                        })(
                                            <Input />
                                        )}
                                    </FormItem>
                                </Row>
                                <Row>
                                    <FormItem label="单位" hasFeedback {...formItemLayout} >
                                        {getFieldDecorator('unit', {
                                            rules: [{ required: true, message: '请输入物料单位!', whitespace:true, min: 1, max: 20 }],
                                            initialValue: this.state.unit
                                        })(
                                            <Input />
                                        )}
                                    </FormItem>
                                </Row>
                                <Row>
                                    <FormItem label="规格" hasFeedback {...formItemLayout} >
                                        {getFieldDecorator('spec', {
                                            rules: [{ required: true, message: '请输入物料规格!', whitespace:true, min: 1, max: 20 }],
                                            initialValue: this.state.spec
                                        })(
                                            <Input />
                                        )}
                                    </FormItem>
                                </Row>
                                <Row>
                                    <FormItem label="库存" hasFeedback {...formItemLayout} >
                                        {getFieldDecorator('amount', {
                                            rules: [{ required: true, message: '请输入库存数量!' }],
                                            initialValue: this.state.amount
                                        })(
                                            <InputNumber precision={0.1} min={0} max={50000} />
                                        )}
                                    </FormItem>
                                </Row>
                                <Row>
                                    <FormItem label="备注" hasFeedback {...formItemLayout} >
                                        {getFieldDecorator('remark', {
                                            rules: [{ message: '请输入备注信息!', whitespace:true, min: 1, max: 20 }],
                                            initialValue: this.state.remark
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

const UserEdit = Form.create()(UserEditForm);

export default UserEdit;