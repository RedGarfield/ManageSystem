import React from 'react';
/**
 * 时间选择器组件编写要点
 * 1、输入框的值是否与禁用时间值冲突
 *   1.1、初始值设置的判断
 *   1.2、用户手动输入值时判断
 *   1.3、直接根据禁用值来比较输入框的值与禁用值的大小
 * 2、点击临界值，小时/分钟禁用的渲染
 *   2.1、不依赖class类名判断，直接判断点击的时间是否属于禁用范围
 *   2.2、点击的小时若处于临界范围值，比如禁用值为start，08：35，点击为8，则35分钟及其之前全禁止点击
 *   2.3、临界值的小时，点击禁用分钟直接返回无效
 *   2.4、临界值的小时，根据禁用类型，若禁用的分钟存在00或者59之类的值则该小时也应禁用
 */
export default class TimePicker extends React.Component{
  constructor(props){
    super(props);
    this.reg = /^(0\d{1}|1\d{1}|2[0-3]):([0-5]\d{1})$/; 
    this.oldHourEle = null; // 保存上一次点击的小时
    this.oldMinuteEle = null; // 保存上一次点击的分钟
    this.hourHandle = null; // 定时器
    this.minuteHandle = null; // 定时器
    this.state = {
      time: this.props.time,
    }
  }
  // 初始化时间验证
  componentWillMount(){
    let obj = this, resetTime = "", getDefaultTime = obj.props.time;
    if(getDefaultTime !== ""){ // 初始值不为空
      // 判断时间格式，是否与禁用时间冲突
      resetTime = ( obj.reg.test(getDefaultTime) && obj.isValid(getDefaultTime) )?getDefaultTime:"";
      this.setTime(resetTime);
    }
    this.setState({ time: resetTime });
  }
  /**
   * 时间冲突性验证，步骤：
   * 1、未设置禁用值直接返回true
   * 2、获取禁用时间值，根据传入值类型来判断传入的值是否与禁用值冲突
   * 3、若为输入框值则直接与禁用值比较大小
   * 4、返回判断结果
   */
  isValid = (value) => {
    let obj = this;
    let disableType = obj.props.disableTime.type,
        disableTime = obj.props.disableTime.value;
    if(disableTime === "" || value.length !== 5) return true;

    disableTime = +disableTime.split(":");
    value = +value.split(":");
    return disableType === "start"?
      (value <= disableTime?false:true):(value >= disableTime?false:true);
  }
  // 输入框发生变化时
  onChange = (obj) => { 
    let value = obj.target.value, resetTime = value;
    if(value.length === 5){ // 输入符合长度的值时进行验证
      let flag = this.isValid(value) && this.reg.test(value);
      if(!flag) resetTime = "";

      // 设置时间选中
      this.setTime(value);
    }
    this.setState({ time: resetTime });
  }
  // 失去焦点时判断时间格式是否正确
  onFocusOut = (e) => { 
    let gettime = e.target.value;
    if(!this.reg.test(gettime) || !this.isValid(gettime)){
      this.clearTime();
    }
  }
  // 设置时间选中
  setTime = (value) => {
    let obj = this;
    value = value.split(":");

    // 选中前清除上一次的时间
    obj.clearTime();

    // 获取时间的容器，对时间本身进行选中，进行滚动动画效果
    let hour = +value[0], minute = +value[1];
    let hourParent = document.querySelector(".time-hour-inner"),
        minuteParent = document.querySelector(".time-minute-inner");
    hourParent.querySelectorAll("li").forEach((cur, index) => {
      if(hour === index){
        obj.oldHourEle = cur;
        cur.className = "selected";
        return true;
      }
    });
    minuteParent.querySelectorAll("li").forEach((cur, index) => {
      if(minute === index){
        obj.oldMinuteEle = cur;
        cur.className = "selected";
        return true;
      }
    });

    obj.animate(hourParent, hour, "hourHandle");
    obj.animate(minuteParent, minute, "minuteHandle");
  }
  // 清除时间
  clearTime = () => { 
    let obj = this;
    if(obj.oldHourEle) obj.oldHourEle.className = "";
    if(obj.oldMinuteEle) obj.oldMinuteEle.className = "";
    obj.oldHourEle = null;
    obj.oldMinuteEle = null;
    obj.setState( { defaultTime: "" } );
  }
  // 时间选择框点击
  handleClick = (obj) => {  
    if(obj.target.nodeName !== "LI") return;
    let inputTime = this.state.time, resetTime = "";
    let value =  obj.target.innerHTML;
    let parent = obj.target.parentNode.parentNode;
    let getCls = parent.className === "time-hour-inner"?"oldHourEle":"oldMinuteEle",
        handle = getCls === "oldHourEle"?"hourHandle":"minuteHandle";
    
    if(getCls === "oldHourEle"){
      // 判断上一次点击的分钟，第一次赋值 点击的小时+旧的分钟，不存在则 点击的小时+零分钟
      resetTime = this.oldMinuteEle ? value+":"+this.oldMinuteEle.innerHTML : value + ":00";
      // 检验第一次赋值， 冲突则将禁用的分钟值+1作为赋值时间
      resetTime = this.isValid(resetTime)?resetTime:
        value+":"+ ( (+this.props.disableTime.value.split(":")[1])+1 < 10 ? 
          "0"+((+this.props.disableTime.value.split(":")[1])+1) : 
          (+this.props.disableTime.value.split(":")[1])+1 );
    }else{
      // 判断上一次点击的小时，第一次赋值 旧的小时+点击的分钟，不存在则 零时+点击的分钟
      resetTime = this.oldHourEle ? this.oldHourEle.innerHTML+":"+value : "00:"+value;
      // 检验第一次赋值， 冲突则将禁用的小时值+1作为赋值时间
      resetTime = this.isValid(resetTime)?resetTime:
        ((+this.props.disableTime.value.split(":")[0])+1) < 10 ? 
          "0"+ ((+this.props.disableTime.value.split(":")[0])+1) + ":"+value : 
          ((+this.props.disableTime.value.split(":")[0])+1)+":"+value;
    }

    if(this[getCls]) this[getCls].className = "";
    this[getCls] = obj.target; // 设置为上一次选中

    this.animate(parent, +value, handle); // 动画效果
    obj.target.className = "selected"; // 设置选中的样式

    this.setState({
      time: resetTime,
    })
  }
  // 输入或点击事件后的动画效果
  animate = (obj, target, handleType) => { 
    clearInterval(this[handleType]);
    this[handleType] = setInterval(e => {
      if(obj.scrollTop < target*24){
        obj.scrollTop = ++obj.scrollTop;
      }else if(obj.scrollTop > target*24){
        obj.scrollTop = --obj.scrollTop;
      }else{
        clearInterval(this[handleType]);
      }
    }, 1);
  }
  // 初始化时间
  initTime = () => { 
    let hour = [], minute = [];
    for(let i = 0; i < 60; i++){
      let getI = i < 10?"0"+i:""+i;
      if(i < 24){
        hour.push(getI);
      }
      minute.push(getI);
    }
    return { hour, minute };
  }
  render(){
    let time = this.initTime();
    return(
      <div className="time-container">
        <div className="time-input-box">
          <input type="text" placeholder={this.props.placeHolder} onChange={this.onChange} 
            value={this.state.time} onFocusOut={this.onFocusOut} />
        </div>
        <div className="time-select-box" onClick={this.handleClick}>
          <div className="time-hour-inner">
            <ul className="time-hour">
              {
                time.hour.map((cur, index) => {
                  return <li key={index}>{cur}</li>
                })
              }
            </ul>
          </div>
          <div className="time-minute-inner">
            <ul className="time-minute">
              {
                time.minute.map((cur, index) => {
                  return <li key={index}>{cur}</li>
                })
              }
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

TimePicker.defaultProps = {
  placeHolder: "请输入时间",
  time: "", // 初始值
  disableTime: { type: "start", value: "" },
  onChange: null,
}