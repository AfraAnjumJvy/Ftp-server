var express = require('express');
var adminModel = require.main.require('./model/admin-model');
var memberModel = require.main.require('./model/member-model');
var router = express.Router();




/////////////////////////////////bangle movie////////////////////

router.get('/viewcontentmem', (req, res)=>{
	
	memberModel.getAllbanglamovie(function(results){
		if(results.length > 0){
			
			var content = {
				name: req.session.name,
				uList: results
			};
			res.render('memberhome/viewcontentmem', content);
		}
		else
			res.send("can not view");
	});	
});


/////////////////////////////////hindi movie////////////////////

router.get('/hindiviewcontentmem', (req, res)=>{
	
	memberModel.getAllhindimovie(function(results){
		if(results.length > 0){
			
			var content = {
				name: req.session.name,
				uList: results
			};
			res.render('memberhome/viewcontentmem', content);
		}
		else
			res.send("can not view");
	});	
});


/////////////////////////////////english movie////////////////////

router.get('/englishviewcontentmem', (req, res)=>{
	
	memberModel.getAllenglishmovie(function(results){
		if(results.length > 0){
			
			var content = {
				name: req.session.name,
				uList: results
			};
			res.render('memberhome/viewcontentmem', content);
		}
		else
			res.send("can not view");
	});	
});
//////////////////////////////tv series bangla/////////////

router.get('/banglatvviewcontentmem', (req, res)=>{
	
	memberModel.getAllbanglatv(function(results){
		if(results.length > 0){
			
			var content = {
				name: req.session.name,
				uList: results
			};
			res.render('memberhome/viewcontentmem', content);
		}
		else
			res.send("can not view");
	});	
});
module.exports = router;