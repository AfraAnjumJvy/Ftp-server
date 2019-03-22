var express = require('express');
var adminModel = require.main.require('./model/admin-model');
var memberModel = require.main.require('./model/member-model');
var router = express.Router();


router.get('/', (req, res)=>{
		var moderator = {
			username: req.session.username
		};
		res.render('moderatorhome/index', moderator);
});	

/////////////////////////profile///////////////////////////////////////

router.get('/moderatorprofile', (req, res)=>{
	
	memberModel.getAll(function(results){
		if(results.length > 0){
			
			var moderator = {
				name: req.session.name,
				uList: results
			};
			res.render('moderatorhome/moderatorprofile', moderator);
		}
		else
			res.send("There is something wrong");
	});	
});


////////////////////view movie list////////////////////
router.get('/viewcontent', (req, res)=>{
	
	memberModel.getAllcon(function(results){
		if(results.length > 0){
			
			var content = {
				name: req.session.name,
				uList: results
			};
			res.render('moderatorhome/viewcontent', content);
		}
		else
			res.send("no movie ");
	});	
});


//////////////////////////////////Add media content///////////////////////////////////
router.get('/addmediacontent', (req, res)=>{
	res.render('moderatorhome/addmediacontent');
});	

router.post('/addmediacontent', (req, res)=>{
	
	var content ={
		type : req.body.type ,
		title : req.body.title,
		link : req.body.link,
		
	};

	
	memberModel.insertme(content, function(success){
			if(success){
			res.redirect('/moderatorhome/viewcontent');
		}else{
			res.render("moderatorhome/addmediacontent");
		}
	});
});


///////////////////////delete movie///////////////////

router.get('/deletemedia/:id', (req, res)=>{

	memberModel.getmo(req.params.id, function(result){
		if(result.length >0 ){
			res.render('moderatorhome/deletemedia', result[0]);
		}else{
			res.redirect('/moderatorhome/mediacontent');
		}
	});
});	

router.post('/deletemedia/:id', (req, res)=>{
	
	memberModel.deletemo(req.params.id, function(success){
		if(success){
			res.redirect('/moderatorhome/mediacontent');
		}else{
			res.redirect("/moderatorhome/deletemedia/"+req.params.id);
		}
	});
});


///////////////////////////view movie list with delete option////////////

router.get('/mediacontent', (req, res)=>{
	
	memberModel.getAllcon(function(results){
		if(results.length > 0){
			
			var content = {
				name: req.session.name,
				uList: results
			};
			res.render('moderatorhome/mediacontent', content);
		}
		else
			res.send("can not view");
	});	
});



module.exports = router;