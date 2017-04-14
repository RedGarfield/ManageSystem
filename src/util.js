class UtilBar{
	/*
	 * 提供通用方法
	 * 1、时间范围比较
	 */
	compareTime(start,end, tag="<"){ // 时间的范围比较
		if(start === "" || end === "" || start === null || end === null || start === undefined || end === undefined){
			return true;
		}
		let startValue = +start.toString().replace(":", ""),
			endValue = +end.toString().replace(":", "");
		if(tag === "<="){
			return (startValue <= endValue)?true:false;
		}else{
			return (startValue < endValue)?true:false;
		}
	}
}
const getUtilBar = new UtilBar();
export default getUtilBar;