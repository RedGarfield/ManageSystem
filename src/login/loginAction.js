/*
 * Action类型
 */

export const TOGGLE_LOADING = "TOGGLE_LOADING"; // 切换登录loading状态

/*
 * Action创建函数
 */
export function toggleLoading(status){
	return {
		type: TOGGLE_LOADING,
		status
	}
}