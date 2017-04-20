import React from 'react';
import ReactDOM from 'react-dom';
import { Form, DatePicker, Button, Input, Col, Select, Cascader, Radio, InputNumber  } from 'antd';
import moment from 'moment';

import MyTimePicker from '../common/MyTimePicker.js'

const FormItem = Form.Item;
const MonthPicker = DatePicker.MonthPicker;
const RangePicker = DatePicker.RangePicker;
const Option = Select.Option;
const RadioGroup = Radio.Group;

const options = [{
    value: '广东省',
    label: '广东省',
    children: [{
        value: '广州市',
        label: '广州市',
        children: [{
            value: '天河区',
            label: '天河区',
        }],
    },{
        value: '深圳市',
        label: '深圳市',
    }],
}, {
    value: '湖南省',
    label: '湖南省',
    children: [{
        value: '长沙市',
        label: '长沙市',
        children: [{
            value: '天心区',
            label: '天心区',
        }],
    },{
        value: '常德市',
        label: '常德市',
        children: [{
            value: '武陵区',
            label: '武陵区',
        }],
    }],
}];

function onChange(value) {
    console.log(value);
}

// Just show the latest item.
function displayRender(label) {
    return label.join(' - ');
}

class TimeRelatedForm extends React.Component {
    constructor(props){
        super(props);
        this.startHour = "";
        this.endHour = "";
    }
    state = {
        sex:1,
        disabledStartHours: [], // 需要禁用的开始时间数组
        disabledStartMinutes: { selectHour: "", selectMinutes: [] }, // 需要禁用的开始分钟对象包括，禁用开始小时、开始分钟数组
        disabledEndHours: [], // 需要禁用的结束时间数组
        disabledEndMinutes: { selectHour: "", selectMinutes: [] }, // 需要禁用的结束分钟对象包括，禁用结束小时、结束分钟数组
    }
    changeStartTime(hour, minute){ // 开始时间改变后回调
        let obj = this, oldHour = obj.startHour, 
            hourArr = (minute === 59)?obj.range(0, hour, "<="):obj.range(0, hour, "<"), // 分钟等于59时，小时进一位
            minuteArr = [];
        if(oldHour === "" || oldHour === hour){
            minuteArr = (minute === 59)?[]:obj.range(0, minute, "<=");
        }
        obj.startHour = hour;
        obj.setState({ 
            disabledEndHours: hourArr,
            disabledEndMinutes: { selectHour: hour, selectMinutes: minuteArr }, 
        });
    }
    changeEndTime(hour, minute){ // 结束时间改变后回调
        let obj = this, oldHour = obj.endHour, 
            hourArr = (minute === 0)?obj.range(hour, 23, "<="):obj.range(hour+1, 23, "<="), // 选择0时，小时不变，大于0时，开始小时进一位
            minuteArr = [];
        if(oldHour === "" || oldHour === hour){
            minuteArr = (minute === 0)?[]:obj.range(minute, 59, "<=")
        }
        this.endHour = hour;
        obj.setState({ 
            disabledStartHours: hourArr,
            disabledStartMinutes: { selectHour: hour, selectMinutes: minuteArr }, 
        });
    }
    range(start, end, type){
        let arr = [];
        if(type === "<"){
            for(let i = start; i < end; i++){
                arr.push(i);
            }
            return arr;
        }else{
            for(let i = start; i <= end; i++){
                arr.push(i);
            }
            return arr;
        }
    }
    changeSex = (e) => {
        this.setState({
            sex: e.target.value,
        });
    }
    changeMoney = (value) => {
        console.log('changed', value);
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
                <FormItem label="营业时间：" {...formItemLayout} >
                    <Col span="6">
                        <FormItem>
                            <MyTimePicker onChange={this.changeStartTime.bind(this)} placeholder="开始时间" 
                                disabledHours={this.state.disabledStartHours} 
                                disabledMinutes={this.state.disabledStartMinutes} />
                        </FormItem>
                    </Col>
                    <Col span="1">
                        <p className="ant-form-split">-</p>
                    </Col>
                    <Col span="6">
                        <FormItem>
                            <MyTimePicker onChange={this.changeEndTime.bind(this)} placeholder="结束时间" 
                                disabledHours={this.state.disabledEndHours} 
                                disabledMinutes={this.state.disabledEndMinutes} />
                        </FormItem>
                    </Col>
                </FormItem>
                <FormItem label="地址："  {...formItemLayout} >
                    <Cascader options={options} expandTrigger="hover"
                        displayRender={displayRender} onChange={onChange}
                    />
                </FormItem>
                <FormItem label="性别："  {...formItemLayout} >
                    <RadioGroup onChange={this.changeSex} value={this.state.sex}>
                        <Radio value={1}>男</Radio>
                        <Radio value={2}>女</Radio>
                    </RadioGroup>
                </FormItem>
                <FormItem label="性别："  {...formItemLayout} >
                    <InputNumber min={0} max={10} step={0.1} onChange={this.changeMoney} />
                </FormItem>
        		<FormItem wrapperCol={{ xs: { span: 24, offset: 0 }, sm: { span: 16, offset: 8 }, }}>
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