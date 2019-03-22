var express = require('express');
var adminModel = require.main.require('./model/member-Model');
var router = express.Router();




router.get('/', (req, res)=>{
	res.render('memberhome/index');
});



module.exports = router;