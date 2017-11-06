var express = require('express');
var router = express.Router();
let passport = require('../controllers/passport');
// let db = require('../database/db');

/* GET home page. */
router.get('/', function(req, res, next) {
	// // db.update('passport',{name:'json'},{name: "new json"},true).then(function(result){
	// db.delete('passport',{a:2}).then(function(result){
	// // db.find('passport',{}).then(function(result){
	// 	res.send(result)
	// }).catch(function(err){
	// 	console.error(err)
	// })
	passport.find({}).then(function(result){
		res.json(result);
	}).catch(function(err){
		res.send(err)
	})
});

module.exports = router;
