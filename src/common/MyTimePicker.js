import React from 'react';
import ReactDOM from 'react-dom';

export default class MyTimePicker extends React.Component {  
	constructor(props){
		super(props);
		this.valueHeight = 28; // 时间值的高度
		this.reg = /^((20|21|22|23|[0-1]\d)\:[0-5][0-9])$/; // 验证时间格式是否正确
		this.handleHour = null; // 小时滚动定时器
		this.handleMinute = null; // 分钟滚动定时器
		this.prevHourSelected = null; // 上一级选择的小时
		this.prevMinuteSelected = null; // 上一次选择的分钟
		this.selectedHour = ""; // 选中的小时
		this.selectedMinute = ""; // 选中的分钟
		this.time = 50; // 滚动时间频率
		if(props.onChange){ // 如果用户使用了自定义onChange，就将用户的onChange赋值给本地的setChange属性
			this.setChange = props.onChange; 
		}
	}
	state = {
		disabledHours: this.props.disabledHours, // 禁用的小时数组
		disabledMinutes: this.props.disabledMinutes, // 禁用的分钟数组
		isShow: false, // 是否显示选择框
	}
	setChange(hour, minute){} // 构造本地的change方法接受用户自定义方法
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
	onChange(e){
		e.stopPropagation();
		let obj = this, value = e.target.value.trim();
		if(value.length !== 0){
			if(value.trim().length === 5){ // 符合长度要求后进行正则验证
				if(obj.reg.test(value)){
					let hour = +value.split(":")[0], minute = +value.split(":")[1];
					// 获取输入值所在的选项的样式
					let hourClass = obj.refs['my-Timepicker-hour'].children[0].children[hour].className;
					let minuteClass = obj.refs['my-Timepicker-minute'].children[0].children[minute].className;

					if(obj.prevHourSelected){ // 如果上一次存在选中的时间就清空选中样式
						obj.refs['my-Timepicker-hour'].children[0].children[+obj.prevHourSelected.innerHTML].className = "";
					}
					if(obj.prevMinuteSelected){ // 如果上一次存在选中的时间就清空选中样式
						obj.refs['my-Timepicker-minute'].children[0].children[+obj.prevMinuteSelected.innerHTML].className = "";
					}

					// 如果所选值不是禁止选中，就添加选中样式，并且启用滚动效果
					if(hourClass.indexOf("my-TimePicker-time-selected-disabled") === -1 && 
					   minuteClass.indexOf("my-TimePicker-time-selected-disabled") === -1){
					   	obj.refs['my-Timepicker-hour'].children[0].children[hour].className = hourClass + " my-TimePicker-time-selected";
					   	obj.refs['my-Timepicker-minute'].children[0].children[minute].className = minuteClass + " my-TimePicker-time-selected";
						obj.animateTop(hour, minute, obj.time);

						//添加此次输入为上一次选中
						obj.prevHourSelected = obj.refs['my-Timepicker-hour'].children[0].children[hour]; 
						obj.prevMinuteSelected = obj.refs['my-Timepicker-minute'].children[0].children[minute]; 
						obj.selectedHour = hour; 
						obj.selectedMinute = minute; 

						if(obj.props.onChange){ // 用户是否绑定了自定义onChange
							obj.setChange(hour, minute);
						}
					}else{ // 输入为禁用数时清空值
						obj.refs['my-Timepicker-text'].value = "";
					}
				}else{ // 置空
					e.target.value = "";
				}
			}
		}else{
			obj.prevHourSelected = null; // 上一级选择的小时
			obj.prevMinuteSelected = null; // 上一次选择的分钟
			obj.selectedHour = ""; // 选中的小时
			obj.selectedMinute = ""; // 选中的分钟
			let hourList = obj.refs['my-Timepicker-hour'].children[0].children, 
				minuteList = obj.refs['my-Timepicker-minute'].children[0].children; 
			for(let i = 0, len = hourList.length; i < len; i++){
				if(hourList[i].className === "my-TimePicker-time-selected"){
					hourList[i].className = "";
					break;
				}
			}
			for(let i = 0, len = minuteList.length; i < len; i++){
				if(minuteList[i].className === "my-TimePicker-time-selected"){
					minuteList[i].className = "";
					break;
				}
			}
			obj.animateTop(0, 0, obj.time);
			if(obj.props.onChange){ // 用户是否绑定了自定义onChange
				obj.setChange("", "");
			}
		}
	}
	/*
	 * 小时/分钟点击效果
	 * 参数&变量说明：
	 *	参数：e -> 小时选中对象(当前或者上一次)
	 *	变量：selectedHour -> 当前选中小时，selectedMinute -> 当前选中分钟
	 * 1、如果是禁止选择的时间，return
	 * 2、如果上一次存在选中的时间就清空选中样式
	 * 3、通过前两次判断后添加当前选择为选中，设置当前选中小时
	 * 4、添加本次选中为上次选中
	 * 5、添加选中动画
	 * 6、如果小时和分钟同时选中，则设置文本框值
	 * 7、如果小时和分钟同时选中则启用回调
	 */
	hourClick = (e) => {
		let target = e.target, obj = this, 
			selectedHour = target.innerHTML, 
			selectedMinute = obj.selectedMinute; 
		if(target.className === "my-TimePicker-time-selected-disabled"){
			return ;
		}
		if(obj.prevHourSelected){
			obj.prevHourSelected.className = "";
		}
		target.className = "my-TimePicker-time-selected";

		obj.prevHourSelected = target;
		obj.selectedHour = selectedHour;
		obj.animateTop(selectedHour, selectedMinute, obj.time);

		if(selectedMinute !== ""){
			obj.refs['my-Timepicker-text'].value = selectedHour+":"+selectedMinute;
		}

		if(obj.props.onChange){
			obj.setChange(+selectedHour, selectedMinute);
		}
	}
	minuteClick = (e) => {
		let target = e.target, obj = this, 
			selectedHour = obj.selectedHour, 
			selectedMinute = target.innerHTML; 
		if(target.className === "my-TimePicker-time-selected-disabled"){
			return ;
		}
		if(obj.prevMinuteSelected){
			obj.prevMinuteSelected.className = "";
		}
		target.className = "my-TimePicker-time-selected";

		obj.prevMinuteSelected = target;
		obj.selectedMinute = selectedMinute;
		obj.animateTop(selectedHour, selectedMinute, obj.time);

		if(selectedHour !== ""){
			obj.refs['my-Timepicker-text'].value = selectedHour+":"+selectedMinute;
		}

		if(obj.props.onChange){
			obj.setChange(selectedHour, +selectedMinute);
		}
	}
	animateTop(hour, minute, time){ // 时间滚动效果
		let obj = this, 
			curHourTop = obj.refs['my-Timepicker-hour'].scrollTop, // 当前小时的滚动高度
			curMinuteTop = obj.refs['my-Timepicker-minute'].scrollTop; // 当前分钟的滚动高度
		clearInterval(obj.handleHour);
		clearInterval(obj.handleMinute);

		// 不为空就转成数字
		hour = (hour === "")?"":+hour;
		minute = (minute === "")?"":+minute;

		// 判断是否进行动画
		if(curHourTop !== obj.valueHeight*hour && hour !== ""){
			obj.handleHour = setInterval(() => {
				let getTop = obj.refs['my-Timepicker-hour'].scrollTop, // 实时获取滚动高度
					result = getTop - obj.valueHeight*hour, // 实时计算滚动高度差
					speed = Math.floor(result/3); // 实时计算滚动的正负速度
				if(speed !== 0){ // 如果滚动高度差绝对值大于0，始终滚动
					obj.refs['my-Timepicker-hour'].scrollTop = getTop - speed;
				}else{ // 反之，停止滚动
					obj.refs['my-Timepicker-hour'].scrollTop = obj.valueHeight*hour; // 速度等于0时，手动修正动画误差
					clearInterval(obj.handleHour);
				}
			}, time);
		}
		if(curMinuteTop !== obj.valueHeight*minute && minute !== ""){
			obj.handleMinute = setInterval(() => {
				let getTop = obj.refs['my-Timepicker-minute'].scrollTop, // 实时获取滚动高度
					result = getTop - obj.valueHeight*minute, // 实时计算滚动高度差
					speed = Math.floor(result/2); // 实时计算滚动的正负速度
				if(speed !== 0){ // 如果速度不等于0，始终滚动
					obj.refs['my-Timepicker-minute'].scrollTop = getTop - speed;
				}else{ // 反之，停止滚动
					obj.refs['my-Timepicker-minute'].scrollTop = obj.valueHeight*minute; // 速度等于0时，手动修正动画误差
					clearInterval(obj.handleMinute);
				}
			}, time);
		}
	}
	componentDidMount(){
		let obj = this, value = obj.props.defaultValue;
		if(value !== "" && obj.reg.test(value)){
			let hour = +value.split(":")[0], 
				minute = +value.split(":")[1], 
				hourObj = obj.refs['my-Timepicker-hour'].children[0].children[hour],
				minuteObj = obj.refs['my-Timepicker-minute'].children[0].children[minute], 
				hourClass = hourObj.className, 
				minuteClass = minuteObj.className; 

			obj.refs['my-Timepicker-text'].value = obj.props.defaultValue;

			obj.prevHourSelected = hourObj; // 上一级选择的小时
			obj.prevMinuteSelected = minuteObj; // 上一次选择的分钟
			obj.selectedHour = hour; // 选中的小时
			obj.selectedMinute = minute; // 选中的分钟

			obj.animateTop(hour, minute, obj.time);

			if(obj.props.onChange){
				obj.setChange(hour, minute);
			}
		}
	}
	// 已加载组件首次渲染完毕后，父组件更新state自动调用次方法重新传入props，接受值后刷新禁用值, 判断选中的值是否在禁用中存在
	componentWillReceiveProps(nextProps){
		let obj = this, getHour = obj.selectedHour, getMinute = obj.selectedMinute;
		if(nextProps.disabledHours.indexOf(getHour) === -1 && nextProps.disabledMinutes.indexOf(getMinute) === -1){
			this.setState({ 
				disabledHours: nextProps.disabledHours,
				disabledMinutes: nextProps.disabledMinutes, 
			});
		}else{
			obj.reset();
		}
	}
	reset = () => { // 重置所有值和选择
		let obj = this;
		obj.refs['my-Timepicker-text'].value = "";
		obj.prevHourSelected = null; // 上一级选择的小时
		obj.prevMinuteSelected = null; // 上一次选择的分钟
		obj.selectedHour = ""; // 选中的小时
		obj.selectedMinute = ""; // 选中的分钟
		let hourList = obj.refs['my-Timepicker-hour'].children[0].children, 
			minuteList = obj.refs['my-Timepicker-minute'].children[0].children;
		obj.setState({ 
			disabledHours: [],
			disabledMinutes: [], 
		}); 
		obj.animateTop(0, 0, obj.time);
	}
	onMouseMove = (e) => {
		this.setState({ isShow: true });
	}
	onMouseOut = (e) => {
		this.setState({ isShow: false });
	}
	render(){
		let obj = this;
		return(
			<div className="my-TimePicker-wrapper" onMouseMove={obj.onMouseMove} onMouseOut={obj.onMouseOut}>
				<div className="my-TimePicker-header">
					<span class="ant-time-picker ">
						<input id={obj.props.id} placeholder={obj.props.placeholder} className="ant-input"
							ref="my-Timepicker-text" onChange={obj.onChange.bind(this)} />
					</span>
				</div>
				<div style={{ height:(obj.state.isShow)?"138px":"0px" }} ref="my-Timepicker-content" className="my-TimePicker-content">
					<div ref="my-Timepicker-hour" className="my-TimePicker-content-box">
						<ul className="my-TimePicker-content-menu" onClick={obj.hourClick} >
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
						<ul className="my-TimePicker-content-menu" onClick={obj.minuteClick} >
						{
							obj.range(0, 59).map((cur, index) => {
								let getHour = cur, setClass = "";
								obj.state.disabledMinutes.map((cur1, index1) => {
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
 	defaultValue: React.PropTypes.string, // 默认值
 	placeholder: React.PropTypes.string,
 	disabledHours: React.PropTypes.array, // 禁用的小时数组
 	disabledMinutes: React.PropTypes.array // 禁用的分钟数组
};
MyTimePicker.defaultProps = {
	id: "",
	defaultValue: "",
	placeholder: "请选择时间",
	disabledHours: [],
	disabledMinutes: []
};