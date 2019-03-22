var express = require('express');
var memberModel = require.main.require('./model/member-Model');
var router = express.Router();




router.get('/', (req, res)=>{
	res.render('login/moderatorlogin');
});

router.post('/', (req, res)=>{
	
	var moderator ={
		username : req.body.username,
		password : req.body.password
	};
	
	memberModel.validate(moderator, function(result){
		if(result.length > 0){
			req.session.name = req.body.username;
			req.session.uid = result[0].id;
			res.redirect('/moderatorhome');
		}else{
			res.render("login/moderatorlogin");
		}
	});
});

module.exports = router;