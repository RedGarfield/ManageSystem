import React from 'react';
import ReactDOM from 'react-dom';
import { Form, DatePicker, TimePicker, Button, Input, Col } from 'antd';
import moment from 'moment';

import UtilBar from '../util.js';

const FormItem = Form.Item;
const MonthPicker = DatePicker.MonthPicker;
const RangePicker = DatePicker.RangePicker;

class TimeRelatedForm extends React.Component {
    constructor(props){
        super(props);
    }
    state = {
        
    }
    setStartTime(time,timestr){
        let hours = [], minutes = [], getHour = +timestr.toString().split(":")[0];
        for(let i = 0, len = +timestr.toString().split(":")[0]; i < len; i++){ // 筛选出禁止选择的结束小时
            hours.push(i);
        }
        for(let i = 0, len = +timestr.toString().split(":")[1]; i < len; i++){ // 筛选出禁止选择的结束分钟
            minutes.push(i);
        }
    }
    setEndTime(time,timestr){
        let hours = [], minutes = [], getHour = +timestr.toString().split(":")[0];
        for(let i = +timestr.toString().split(":")[0]; i <= 24; i++){ // 筛选出禁止选择的开始小时
            hours.push(i);
        }
        for(let i = +timestr.toString().split(":")[1]; i <= 60; i++){ // 筛选出禁止选择的开始分钟
            minutes.push(i);
        }
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
                <FormItem {...formItemLayout} label="营业时间" >
                    <Col span="4" style={{textAlign:"center"}} >
                        {getFieldDecorator('date-time-picker1', config)(
                            <TimePicker value = {this.props.starttime} onChange = {this.setStartTime.bind(this)} 
                                format = "HH:mm" placeholder = "开始时间"
                                defaultValue = {moment({hour: 0, minute: 0})} />
                        )}
                    </Col>
                    <Col span="1"><p className="ant-form-split">-</p></Col>
                    <Col span="4" style={{textAlign:"center"}} >
                        {getFieldDecorator('date-time-picker2', config)(
                            <TimePicker value = {this.props.endtime} onChange = {this.setEndTime.bind(this)} 
                                format = "HH:mm" placeholder = "结束时间"
                                defaultValue = {moment({hour: 23, minute: 59})}  />
                        )}
                    </Col>
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