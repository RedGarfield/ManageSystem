import React from 'react';
import ReactDOM from 'react-dom';
import { Form, DatePicker, Button, Input, Col } from 'antd';
import moment from 'moment';

import MyTimePicker from '../common/MyTimePicker.js'

const FormItem = Form.Item;
const MonthPicker = DatePicker.MonthPicker;
const RangePicker = DatePicker.RangePicker;

class TimeRelatedForm extends React.Component {
    constructor(props){
        super(props);
    }
	render() {
    	const { getFieldDecorator } = this.props.form;
    	const formItemLayout = {
      		labelCol: {
		        xs: { span: 24 },
		        sm: { span: 8 },
		     },
		    wrapperCol: {
		        xs: { span: 24 },
		        sm: { span: 16 },
		    },
    	};
    	const config = {
      		rules: [{ type: 'object', required: true, message: '请选择时间!' }]
    	};
    	return (
      		<Form onSubmit={this.handleSubmit}>
                <FormItem wrapperCol={{
                    xs: { span: 24, offset: 0 },
                    sm: { span: 16, offset: 8 },
                }}>
                    <MyTimePicker disabledHours={[1,2,3,4,5]} placeholder="开始时间" />
                </FormItem>
        		<FormItem wrapperCol={{
            		xs: { span: 24, offset: 0 },
            		sm: { span: 16, offset: 8 },
        		}}>
          			<Button type="primary" htmlType="submit" size="large">Submit</Button>
        		</FormItem>
      		</Form>
    	);
  	}
}

TimeRelatedForm.propTypes = {
    starttime: moment({hour: 0, minute: 0}),
    endtime: moment({hour: 23, minute: 59})
}

const AddForm = Form.create()(TimeRelatedForm);

export default AddForm;