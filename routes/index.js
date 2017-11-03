var express = require('express');
var router = express.Router();
let passport = require('../controllers/passport');

/* GET home page. */
router.get('/', function(req, res, next) {
	// client.connect().then(function(db){
	// 	return client.insert(db,'passport',[{name:'json'}])
	// }).then(function(result){
	// 	res.json(result)
	// })
	res.send(passport.test());
});

module.exports = router;
