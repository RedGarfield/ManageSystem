import React from 'react';
import ReactDOM from 'react-dom';
import { Form, DatePicker, Button, Input, Col, Select, Cascader, Radio, InputNumber, Switch, Tabs  } from 'antd';


const FormItem = Form.Item;
const MonthPicker = DatePicker.MonthPicker;
const RangePicker = DatePicker.RangePicker;
const Option = Select.Option;
const RadioGroup = Radio.Group;
const TabPane = Tabs.TabPane;
// const { MonthPicker, RangePicker } = DatePicker;

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
        this.startMinute = "";
        this.endHour = "";
        this.endMinute = "";
    }
    state = {
        sex:1,
        disabledStartHours: [], // 需要禁用的开始时间数组
        disabledStartMinutes: [], // 需要禁用的开始分钟对象包括，禁用开始小时、开始分钟数组
        disabledEndHours: [], // 需要禁用的结束时间数组
        disabledEndMinutes: [], // 需要禁用的结束分钟对象包括，禁用结束小时、结束分钟数组
        money: 100,
    }
    /*
     * 参数说明：hour -> 回调小时，minute -> 回调分钟
     * 变量说明：obj -> 当前上下文, endHourArr -> 禁用结束小时数组，endMinuteArr -> 禁用结束分钟数组，
     *           startMinuteArr -> 禁用开始分钟数组，preEndHour -> 上一次选中的结束小时
     *           preEndMinute -> 上一次选中的结束分钟
     * 方法说明：选中时间后的回调方法，start和end是开始与结束，两个方法功能相同
     *      1、只选中时间时，返回禁用的小时（不包括选中的小时）
     *      2、判断时间和分钟是否同时选中，返回禁用的小时数组，根据分钟的位置决定小时是否进退
     *      3、在时间和分钟同时选中时，继续判断是否存在已经选中的开始/结束小时并判断是否和当前选中小时相等，返回禁用的分钟数组
     *      4、判断开始/结束小时和分钟是否选中，并判断开始/结束小时否和当前小时相等，返回当前元素需要禁用的分钟数组
     */
    changeStartTime(hour, minute){ 
        let obj = this, 
            endHourArr = [], 
            endMinuteArr = [], 
            startMinuteArr = [], 
            preEndHour = obj.endHour, 
            preEndMinute = obj.endMinute; 

        if(hour !== ""){
            endHourArr = obj.range(0, +hour, "<");
        }
        if(hour !== "" && minute !== ""){
            endHourArr = (+minute === 59)?obj.range(0, +hour):obj.range(0, +hour, "<");
            if(preEndHour !== "" && parseInt(preEndHour) === parseInt(hour)){
                endMinuteArr = obj.range(0, +minute);
            }
        }
        if(hour !== "" && preEndHour !== "" && preEndMinute !== "" && parseInt(preEndHour) === parseInt(hour)){
            startMinuteArr = obj.range(+preEndMinute, 59);
        }

        obj.startHour = hour;
        obj.startMinute = minute;
        obj.setState({ 
            disabledStartMinutes: startMinuteArr, 
            disabledEndHours: endHourArr,
            disabledEndMinutes: endMinuteArr, 
        });
    }
    changeEndTime(hour, minute){ // 结束时间改变后回调
        let obj = this, 
            startHourArr = [], 
            startMinuteArr = [], 
            endMinuteArr = [], 
            preStartHour = obj.startHour, 
            preStartMinute = obj.startMinute;

        if(hour !== ""){
            startHourArr = obj.range((+hour)+1, 23);
        }
        if(hour !== "" && minute !== ""){
            startHourArr = (+minute === 0)?obj.range(+hour, 23):obj.range((+hour)+1, 23);
            if(preStartHour !== "" && parseInt(preStartHour) === parseInt(hour)){
                startMinuteArr = obj.range(+minute, 59);
            }
        }
        if(hour !== "" && preStartHour !== "" && preStartMinute !== "" && parseInt(preStartHour) === parseInt(hour)){
            endMinuteArr = obj.range(0, +preStartMinute);
        }

        obj.endHour = hour; 
        obj.endMinute = minute; 
        obj.setState({ 
            disabledEndMinutes: endMinuteArr, 
            disabledStartHours: startHourArr,
            disabledStartMinutes: startMinuteArr, 
        });
    }
    range(start, end, type = "<="){
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
        console.log(value);
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
                                disabledHours={this.state.disabledStartHours} defaultValue="07:30"
                                disabledMinutes={this.state.disabledStartMinutes} />
                        </FormItem>
                    </Col>
                    <Col span="1">
                        <p className="ant-form-split">-</p>
                    </Col>
                    <Col span="6">
                        <FormItem>
                            <MyTimePicker onChange={this.changeEndTime.bind(this)} placeholder="结束时间" 
                                disabledHours={this.state.disabledEndHours} defaultValue="18:30"
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
                <FormItem label="金额："  {...formItemLayout} >
                    <InputNumber min={0} step={0.01} defaultValue={this.state.money} />
                </FormItem>
                <FormItem label="状态："  {...formItemLayout} >
                    <Switch defaultChecked={false} />
                </FormItem>
                <FormItem label="状态："  {...formItemLayout} >
                    <Tabs type="card">
                        <TabPane tab="Tab 231" key="1">Content of Tab Pane 1</TabPane>
                        <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
                        <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
                    </Tabs>
                </FormItem>
                <FormItem label="状态："  {...formItemLayout} >
                    <DatePicker.RangePicker />
                </FormItem>
        		<FormItem wrapperCol={{ xs: { span: 24, offset: 0 }, sm: { span: 16, offset: 8 } }}>
          			<Button type="primary" htmlType="submit" size="large">保存</Button>
        		</FormItem>
      		</Form>
    	);
  	}
}

const AddForm = Form.create()(TimeRelatedForm);

export default AddForm;