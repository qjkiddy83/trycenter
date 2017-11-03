let Passport = require('../models/passport');
let encrypter = require('../utils/encrypter');

exports.test = function(){
	return encrypter.create();
}