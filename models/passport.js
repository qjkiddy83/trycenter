let db = require('../database/db.js');
let Promise = require('bluebird');

class Passport{
	constructor(args) {
		this.id = "";
	    this.username = args.username;
	    this.email = args.email;
	    this.password = args.passport;
	    this.avatar = args.avatar;
	    this.phone = args.phone;
	    this.reg_date = '';//注册时间
	    this.status = 0;//状态：正常，锁定，注销
	}
	insert(){
		console.log(this)
		// client.connect().then(function(db){
		// 	return client.insert(db,'passport',[{name:'json'}])
		// }).then(function(result){
		// 	res.json(result)
		// })

	}
	find(condition){
		return new Promise(function(resolve,reject){
			db.find('passport',condition).then(function(result){
				// console.log(result)
				resolve(result);
			}).catch(function(err){
				reject(err)
			})
		})
		
	}
	update(){

	}
	del(){

	}
}

module.exports = Passport;