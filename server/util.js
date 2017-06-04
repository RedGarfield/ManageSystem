module.exports = {
	isLogin: function(req, res, next){
		let session = req.session;
		let loginUser = session.loginUser;
		let isLogined = !!loginUser;

		return {
			isLogined: isLogined,
			name: loginUser || ""
		};
	}
}