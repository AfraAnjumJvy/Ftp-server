var express = require('express');
var adminModel = require.main.require('./model/admin-model');
var memberModel = require.main.require('./model/member-model');
var router = express.Router();


router.get('/', (req, res)=>{
		var admin = {
			username: req.session.username
		};
		res.render('adminhome/index', admin);
});	
/////////////////////////profile///////////////////////////////////////

router.get('/adminprofile', (req, res)=>{
	
	adminModel.getAll(function(results){
		if(results.length > 0){
			
			var admin = {
				name: req.session.name,
				uList: results
			};
			res.render('adminhome/adminprofile', admin);
		}
		else
			res.send("There is something wrong");
	});	
});


////////////////////////////////Moderatorlist/////////////////////////////
router.get('/moderatorlist', (req, res)=>{
	
	memberModel.getAll(function(results){
		if(results.length > 0){
			
			var moderator = {
				name: req.session.name,
				uList: results
			};
			res.render('adminhome/moderatorlist', moderator);
		}
		else
			res.send("All user is blocked");
	});	
});

/////////////////////////////////content////////////////////

router.get('/content', (req, res)=>{
	
	adminModel.getAll(function(results){
		if(results.length > 0){
			
			var admin = {
				name: req.session.name,
				uList: results
			};
			res.render('adminhome/content', admin);
		}
		else
			res.send("There is something wrong");
	});	
});


//////////////////////////view movie list with delete option////////////

router.get('/movielist', (req, res)=>{
	
	memberModel.getAllmovie(function(results){
		if(results.length > 0){
			
			var content = {
				name: req.session.name,
				uList: results
			};
			res.render('adminhome/movielist', content);
		}
		else
			res.send("can not view");
	});	
});

/*router.get('/edit/:id', (req, res)=>{

	adminModel.get( req.params.id,function(result){
		if(result.length >0 ){
			res.render('adminhome/editadmininfo', result[0]);
		}else{
			res.redirect('/adminhome');
		}
	});
});	

router.post('/edit/:id', (req, res)=>{
	
	var admin ={
		id: req.params.id,
		username : req.body.username,
		email : req.body.email,
		password : req.body.password
	};
	
	adminModel.update(admin, function(success){
		if(success){
			res.redirect('/adminhome/admininfo');
		}else{
			res.redirect("/adminhome/edit/"+req.parms.id);
		}
	});
});*/

//////////////////////////////////Add moderator///////////////////////////////////
router.get('/addmoderator', (req, res)=>{
	res.render('adminhome/addmoderator');
});	

router.post('/addmoderator', (req, res)=>{
	
	var moderator ={
		username : req.body.username,
		password : req.body.password,
		email : req.body.email,
		
	};

	
	memberModel.insert(moderator, function(success){
			if(success){
			res.redirect('/adminhome/moderatorlist');
		}else{
			res.render("adminhome/addmoderator");
		}
	});
});

/////////////////////////delete from moderator list//////////////////////////////

router.get('/delete/:id', (req, res)=>{

	memberModel.get(req.params.id, function(result){
		if(result.length >0 ){
			res.render('adminhome/deletemoderator', result[0]);
		}else{
			res.redirect('/adminhome/moderatorlist');
		}
	});
});	

router.post('/delete/:id', (req, res)=>{
	
	memberModel.delete(req.params.id, function(success){
		if(success){
			res.redirect('/adminhome/moderatorlist');
		}else{
			res.redirect("/adminhome/delete/"+req.params.id);
		}
	});
});


///////////////////////delete movie///////////////////

router.get('/deletemovie/:id', (req, res)=>{

	memberModel.getmo(req.params.id, function(result){
		if(result.length >0 ){
			res.render('adminhome/deletemovie', result[0]);
		}else{
			res.redirect('/adminhome/movielist');
		}
	});
});	

router.post('/deletemovie/:id', (req, res)=>{
	
	memberModel.deletemo(req.params.id, function(success){
		if(success){
			res.redirect('/adminhome/movielist');
		}else{
			res.redirect("/adminhome/deletemovie/"+req.params.id);
		}
	});
});

////////////////////////////////view request list/////////////////////////////
router.get('/viewrequest', (req, res)=>{
	
	memberModel.getAllre(function(results){
		if(results.length > 0){
			
			var request = {
				name: req.session.name,
				uList: results
			};
			res.render('adminhome/viewrequest', request);
		}
		else
			res.send("no request");
	});	
});

module.exports = router;