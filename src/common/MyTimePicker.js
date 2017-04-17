import React from 'react';
import ReactDOM from 'react-dom';

import { Input, Icon } from 'antd';

class MyTimePicker extends React.Component {
	constructor(props){
		super(props);
	}
	state = {
		id: this.props.id,
		defaultValue: this.props.defaultValue,
		placeholder: this.props.placeholder,
		disabledHours: this.props.disabledHours,
		disabledMinutes: { selectHour: this.props.disabledHour, selectMinuts: this.props.disabledMinutes },
		prevHourSelected: null
	}
	range(start, end){
		if(typeof start !== "number" || typeof end !== "number" ||　start >= end){
			return [];
		}
		let arr = [];
		for(let i = start; i <= end; i++){
			arr.push(i);
		}
		return arr;
	}
	onFocus(e){
	}
	onHandleClick(e){
		if(e.target.className === "my-TimePicker-time-selected-disabled"){ // 如果是禁止选择的时间
			return ;
		}
		if(this.state.prevHourSelected){ // 如果上一次存在选中的时间就清空选中样式
			this.state.prevHourSelected.className = "";
		}
		e.target.className = "my-TimePicker-time-selected"; // 添加当前选中
		this.setState({ prevHourSelected: e.target }); // 将当前选中设置为上一次选中
	}
	render(){
		let obj = this;
		return(
			<div className="my-TimePicker-wrapper">
				<div className="my-TimePicker-header">
					<Input id={this.state.id} value={this.state.defaultValue} placeholder={this.state.placeholder} 
						suffix={<Icon type="clock-circle-o" />} />
				</div>
				<div className="my-TimePicker-content">
					<div className="my-TimePicker-content-box">
						<ul className="my-TimePicker-content-menu" onClick={this.onHandleClick.bind(this)} >
						{
							obj.range(0, 23).map((cur, index) => {
								let getHour = cur, setClass = "";
								obj.state.disabledHours.map((cur1, index1) => {
									if(getHour === cur1){
										setClass = "my-TimePicker-time-selected-disabled"
									}
								})
								return <li className={ setClass } key={index} >{(cur < 10)?"0"+cur:cur}</li>
							})
						}
						</ul>
					</div>
				</div>
			</div>
		)
	}
}

MyTimePicker.propTypes = {
 	id: React.PropTypes.string,
 	placeholder: React.PropTypes.string,
 	disabledHours: React.PropTypes.array,
 	disabledMinutes: React.PropTypes.object
};
MyTimePicker.defaultProps = {
	id: "",
	placeholder: "请选择时间",
	disabledHours: [],
	disabledMinutes: { selectHour: 0, selectMinuts: [] }
}

export default MyTimePicker;