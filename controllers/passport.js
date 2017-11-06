let Passport = require('../models/passport');
let encrypter = require('../utils/encrypter');
let Promise = require('bluebird');

exports.test = function(){
	return encrypter.create();
}

exports.find = function(condition){
	let passport = new Passport({});
	return new Promise(function(resolve,reject){
		passport.find(condition).then(function(result){
			resolve(result)
		}).catch(function(err){
			reject(err)
		})
	})
}