var mongoose = require('mongoose');
var db = mongoose.connection; // 获取mongoose连接实例

mongoose.connect('mongodb://localhost/test');

db.on('error', () => {
	console.error('mongodb open is error...');
});
db.once('open', () => {
    console.log('mongodb is openning...');
});

module.exports = mongoose;