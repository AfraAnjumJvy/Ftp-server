var express = require('express');
var adminModel = require.main.require('./model/admin-model');
var memberModel = require.main.require('./model/member-model');
var router = express.Router();




router.get('/', (req, res)=>{
		var user = {
			name: req.session.name
		};
		res.render('home/index', user);
});	


//////////////////////admin registration///////////////////

router.get('/adminregister', (req, res)=>{
	res.render('home/adminregister');
});




router.post('/adminregister', (req, res)=>{
	
	var admin={
		username : req.body.username,
		email : req.body.email,
		password : req.body.password
		
		};

	
	adminModel.insert(admin, function(success){
			if(success){
			res.redirect('/adminlogin');
		}else{
			res.render("home/adminregister");
		}
	});
});


////////////////////////moderator registration///////////////////

router.get('/moderatorregister', (req, res)=>{
	res.render('home/moderatorregister');
});



router.post('/moderatorregister', (req, res)=>{
	
	var member={
		username : req.body.username,
		email : req.body.email,
		password : req.body.password
		
		};

	
	memberModel.insert(member, function(success){
			if(success){
			res.redirect('/');
		}else{
			res.render("home/moderatorregister");
		}
	});
});


////////////////////////////////////upload movie///////////////

router.get('/mediacontent/uploadmovie', (req, res)=>{
	res.render('mediacontent/uploadmovie');
});



router.post('/mediacontent/uploadmovie', (req, res)=>{
	
	var content={
		type : req.body.type,
		title: req.body.title,
		link : req.body.link
		
		};

	
	memberModel.insertcontent(content, function(success){
			if(success){
			res.redirect('/adminhome/content');
		}else{
			res.render("mediacontent/uploadmovie");
		}
	});
});







////////////////////////Request Box///////////////////

router.get('/request', (req, res)=>{
	res.render('home/requestbox');
});



router.post('/request', (req, res)=>{
	
	var member={
		username : req.body.username,
		email : req.body.email,
		dcontent : req.body.dcontent
		
		};

	
	memberModel.insertre(member, function(success){
			if(success){
			res.redirect('/');
		}else{
			res.render("home/requestbox");
		}
	});
});






module.exports = router;