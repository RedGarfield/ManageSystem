import React from 'react';
import ReactDOM from 'react-dom';

class MyTimePicker extends React.Component {  
	constructor(props){
		super(props);
		this.valueHeight = 28; // 时间值的高度
		this.reg = /^((20|21|22|23|[0-1]\d)\:[0-5][0-9])$/; // 验证时间格式是否正确
		this.handleHour = null; // 小时滚动定时器
		this.handleMinute = null; // 分钟滚动定时器
		this.time = 50; // 滚动时间频率
	}
	state = {
		id: this.props.id, // 输入框id
		defaultValue: this.props.defaultValue || "", // 默认值
		placeholder: this.props.placeholder, // 默认提示文字
		disabledHours: this.props.disabledHours, // 禁用的小时
		disabledMinutes: this.props.disabledMinutes, // 禁用的分钟
		prevHourSelected: null, // 上一级选择的小时
		prevMinuteSelected: null, // 上一次选择的分钟
		selectedHour: "00", // 选中的小时
		selectedMinute: "00", // 选中的分钟
		isShow: false, // 是否显示选择框
	}
	range(start, end){ // 构造时间
		if(typeof start !== "number" || typeof end !== "number" ||　start >= end){
			return [];
		}
		let arr = [];
		for(let i = start; i <= end; i++){
			arr.push(i);
		}
		return arr;
	}
	onFocus(e){ // 输入框获得焦点时显示选择框
		e.stopPropagation();
		let obj = this;
		obj.setState({ isShow: true });
	}
	onBlur(e){ // 输入框获得焦点时隐藏选择框
		let obj = this, value = e.target.value.toString().trim(), reg = obj.reg;
		if(value.length !== ""){
			if(!reg.test(value)){
				e.target.value = "";
			}
		}
		// obj.setState({ isShow: true });
	}
	onKeyDown(e){ // 监听输入框的键盘事件
		
	}
	onChange(e){
		e.stopPropagation();
		let obj = this, value = e.target.value.toString().trim(), reg = obj.reg;
		if(value.length !== ""){
			if(reg.test(value)){
				let hour = +value.split(":")[0], minute = +value.split(":")[1];
				// 设置输入的小时和分钟为选中效果
				let hourClass = obj.refs['my-Timepicker-hour'].children[0].children[hour].className;
				let minuteClass = obj.refs['my-Timepicker-minute'].children[0].children[minute].className;


				if(obj.state.prevHourSelected){ // 如果上一次存在选中的时间就清空选中样式
					obj.state.prevHourSelected.className = "";
				}
				if(obj.state.prevMinuteSelected){ // 如果上一次存在选中的时间就清空选中样式
					obj.state.prevMinuteSelected.className = "";
				}

				 // 如果所选值不是禁止选中，就添加选中样式，并且启用滚动效果
				if(hourClass.indexOf("my-TimePicker-time-selected-disabled") === -1 && 
				   minuteClass.indexOf("my-TimePicker-time-selected-disabled") === -1){
				   	obj.refs['my-Timepicker-hour'].children[0].children[hour].className = hourClass + " my-TimePicker-time-selected";
				   	obj.refs['my-Timepicker-minute'].children[0].children[minute].className = minuteClass + " my-TimePicker-time-selected";
					obj.animateTop(hour, minute, obj.time);

					//添加此次输入为上一次选中
					obj.setState({ 
						prevHourSelected: obj.refs['my-Timepicker-hour'].children[0].children[hour], 
						prevMinuteSelected: obj.refs['my-Timepicker-minute'].children[0].children[minute], 
						selectedHour: hour, 
						selectedMinute: minute, 
					}); 
			
				}else{ // 否则置空
					e.target.value = "";
				}
			}
		}
	}
	onHourClick(e){ // 选中小时
		let obj = this, target = e.target;
		if(target.className === "my-TimePicker-time-selected-disabled"){ // 如果是禁止选择的时间
			return ;
		}
		if(obj.state.prevHourSelected){ // 如果上一次存在选中的时间就清空选中样式
			obj.state.prevHourSelected.className = "";
		}
		target.className = "my-TimePicker-time-selected"; // 添加当前选中
		// 获取已经选中的小时和分钟
		let selectedHour = target.innerHTML, 
			selectedMinute = obj.state.selectedMinute;
		obj.refs['my-Timepicker-text'].value = selectedHour+":"+selectedMinute; // 设置文本框的值
		// 将当前选中设置为上一次选中
		obj.setState({ 
			prevHourSelected: target, 
			selectedHour: selectedHour, 
		});

		obj.animateTop(+selectedHour, +selectedMinute, obj.time); // 选中后启用滚动效果

		
		// let getChange = obj.onHourClick.call(obj.props.onChange);
		// getChange();
		
	}
	onMinuteClick(e){ // 选中分钟
		let obj = this, target = e.target;
		if(e.target.className === "my-TimePicker-time-selected-disabled"){ // 如果是禁止选择的时间
			return ;
		}
		if(obj.state.prevMinuteSelected){ // 如果上一次存在选中的时间就清空选中样式
			obj.state.prevMinuteSelected.className = "";
		}
		e.target.className = "my-TimePicker-time-selected"; // 添加当前选中
		// 获取已经选中的小时和分钟
		let selectedHour = obj.state.selectedHour,
			selectedMinute = target.innerHTML;
		obj.refs['my-Timepicker-text'].value = selectedHour+":"+selectedMinute; // 设置文本框的值
		// 将当前选中设置为上一次选中
		obj.setState({ 
			prevMinuteSelected: target, 
			selectedMinute: selectedMinute,
		});

		obj.animateTop(+selectedHour, +selectedMinute, obj.time); // 选中后启用滚动效果
	}
	componentDidMount(){ // 加载完毕后初始化：1、设置值；2、设置值所在的高度
		let obj = this, value = obj.props.value;
		if(value !== ""){
			let hour = +value.replace(" ","").split(":")[0], minute = +value.replace(" ","").split(":")[1];
			obj.refs['my-Timepicker-hour'].scrollTop = hour*obj.valueHeight;
			obj.refs['my-Timepicker-minute'].scrollTop = minute*obj.valueHeight;
		}
	}
	animateTop(hour, minute, time){
		// 判断参数是否合法

		let obj = this, 
			curHourTop = obj.refs['my-Timepicker-hour'].scrollTop, // 当前小时的滚动高度
			curMinuteTop = obj.refs['my-Timepicker-minute'].scrollTop; // 当前分钟的滚动高度
		clearInterval(obj.handleHour);
		clearInterval(obj.handleMinute);

		// 判断是否进行动画
		if(curHourTop !== obj.valueHeight*hour){
			obj.handleHour = setInterval(() => {
				let getTop = obj.refs['my-Timepicker-hour'].scrollTop, // 实时获取滚动高度
					result = getTop - obj.valueHeight*hour, // 实时计算滚动高度差
					speed = Math.floor(result/7); // 实时计算滚动的正负速度
				if(Math.abs(result) > 0 && speed !== 0){ // 如果滚动高度差绝对值大于0，并且滚动速度不为0，始终滚动
					obj.refs['my-Timepicker-hour'].scrollTop = getTop - speed;
				}else{ // 反之，停止滚动
					obj.refs['my-Timepicker-hour'].scrollTop = obj.valueHeight*hour; // 修正滚动偏差
					clearInterval(obj.handleHour);
				}
			}, time);
		}
		if(curMinuteTop !== obj.valueHeight*minute){
			obj.handleMinute = setInterval(() => {
				let getTop = obj.refs['my-Timepicker-minute'].scrollTop, // 实时获取滚动高度
					result = getTop - obj.valueHeight*minute, // 实时计算滚动高度差
					speed = Math.floor(result/4); // 实时计算滚动的正负速度
				console.log(result);
				if(Math.abs(result) > 0 && speed !== 0){ // 如果滚动高度差绝对值大于0，并且滚动速度不为0，始终滚动
					obj.refs['my-Timepicker-minute'].scrollTop = getTop - speed;
				}else{ // 反之，停止滚动
					obj.refs['my-Timepicker-minute'].scrollTop = obj.valueHeight*minute; // 修正滚动偏差
					clearInterval(obj.handleMinute);
				}
			}, time);
		}
	}
	render(){
		let obj = this;
		return(
			<div className="my-TimePicker-wrapper">
				<div className="my-TimePicker-header">
					<span class="ant-time-picker ">
						<input id={obj.state.id} placeholder={obj.state.placeholder}
							ref="my-Timepicker-text" className="ant-time-picker-input"
							onFocus={obj.onFocus.bind(this)} onBlur={obj.onBlur.bind(this)} onKeyDown={obj.onKeyDown.bind(this)} 
							onChange={obj.onChange.bind(this)} />
						<span class="ant-time-picker-icon"></span>
					</span>
				</div>
				<div style={{ display:(obj.state.isShow)?"block":"none" }} ref="my-Timepicker-content" className="my-TimePicker-content">
					<div ref="my-Timepicker-hour" className="my-TimePicker-content-box">
						<ul className="my-TimePicker-content-menu" onClick={obj.onHourClick.bind(obj)} >
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
					<div ref="my-Timepicker-minute" className="my-TimePicker-content-box">
						<ul className="my-TimePicker-content-menu" onClick={obj.onMinuteClick.bind(this)} >
						{
							obj.range(0, 60).map((cur, index) => {
								let getHour = cur, setClass = "";
								obj.state.disabledMinutes.selectMinutes.map((cur1, index1) => {
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
	setValue: React.PropTypes.string,
 	placeholder: React.PropTypes.string,
 	disabledHours: React.PropTypes.array,
 	disabledMinutes: React.PropTypes.object
};
MyTimePicker.defaultProps = {
	id: "",
	value: "",
	placeholder: "请选择时间",
	disabledHours: [],
	disabledMinutes: { selectHour: 0, selectMinutes: [] }
}

export default MyTimePicker;