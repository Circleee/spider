const mail = require('./config.js');

let nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport({
	service: mail.server,
	auth: {
		user: mail.mymail,
		pass: mail.mailpass //授权码,通过QQ获取  

	}
});
let sendMail = (sendTo,sub , main ) => {
	let mailOptions = {
		from: mail.mymail, // 发送者  
		to:  sendTo,// 接受者,可以同时发送多个,以逗号隔开  
		subject: sub, // 标题  
		text: main, // 文本  
	};
	transporter.sendMail(mailOptions, function(err, info) {
		if (err) {
			console.log(err);
			return;
		}
		console.log('发送成功');
	});
}


module.exports  = sendMail;