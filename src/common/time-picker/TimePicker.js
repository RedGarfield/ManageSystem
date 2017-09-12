import React from 'react';
/**
 * 方法说明
 * componentWillMount：加载用户数据前检查用户设置的各项默认值是否正确
 */
export default class TimePicker extends React.Component{
  constructor(props){
    super(props);
    this.reg = /^(0\d{1}|1\d{1}|2[0-3]):([0-5]\d{1})$/; 
    this.oldHourEle = null; // 保存上一次点击的小时
    this.oldMinuteEle = null; // 保存上一次点击的分钟
    this.handle = null; // 时间滚动动画效果
    this.flag = true;
    this.state = {
      defaultTime: this.props.defaultTime,
    }
  }
  componentWillMount(){
    let obj = this;
    let getDefaultTime = obj.props.defaultTime;
    let flag = true;
    if(getDefaultTime !== ""){
      if(!obj.test(getDefaultTime)){
        console.error("初始时间值是非法的，请设置如‘08:35’格式的时间。");
        flag = false;
      }
      let getDefaultHour = getDefaultTime.split(":")[0],
          getDefaultMinute = getDefaultTime.split(":")[1];
      // 检查用户设置的值和要求禁用的值是否冲突
      if(obj.props.disableTime.hour && obj.props.disableTime.hour.includes(getDefaultHour)){
        console.error("设置的默认时间与要禁用的时间冲突。");
        flag = false;
      }
      if(obj.props.disableTime.minute && obj.props.disableTime.minute.includes(getDefaultMinute)){
        console.error("设置的默认时间与要禁用的时间冲突。");
        flag = false;
      }
      this.setState({
        defaultTime: flag===true?this.props.defaultTime:"",
      });
    }
  }
  onChange = (obj) => {}
  handleClick = (obj) => {
    if(!this.flag) return;
    let value = +obj.target.innerHTML;
    let parent = obj.target.parentNode.parentNode;
    if(this.oldHourEle && parent.className === "time-hour-inner"){
      this.oldHourEle.className = "";
      this.oldHourEle = obj.target;
    }
    if(this.oldMinuteEle && parent.className === "time-minute-inner"){
      this.oldMinuteEle.className = "";
      this.oldMinuteEle = obj.target;
    }
    clearInterval(this.handle);
    this.handle = setInterval(e => {
      
    }, 10);
    parent.scrollTop = value * 24;
    obj.target.className = "selected";
  }
  initTime = () => {
    let hour = [], minute = [];
    for(let i = 0; i < 60; i++){
      let getI = i < 10?"0"+i:""+i;
      if(i < 24){
        hour.push(getI);
        minute.push(getI);
      }else{
        minute.push(getI);
      }
    }
    return { hour, minute };
  }
  render(){
    let time = this.initTime();
    return(
      <div className="time-container">
        <div className="time-input-box">
          <input type="text" onChange={this.onChange} value={this.state.defaultTime} />
        </div>
        <div className="time-select-box" onClick={this.handleClick}>
          <div className="time-hour-inner">
            <ul className="time-hour">
              {
                time.hour.map((cur, index) => {
                  let getClass=this.props.disableTime.hour.includes(cur)?"cannot":""
                  return <li className={getClass} key={index}>{cur}</li>;
                })
              }
            </ul>
          </div>
          <div className="time-minute-inner">
            <ul className="time-minute">
              {
                time.minute.map((cur, index) => {
                  let getClass=this.props.disableTime.minute.includes(cur)?"cannot":""
                  return <li className={getClass} key={index}>{cur}</li>;
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
  defaultTime: "", // 初始值
  disableTime: { // 要禁用的时间
    hour: [],
    minute: [],
  },
  onChange: function(value){}
}