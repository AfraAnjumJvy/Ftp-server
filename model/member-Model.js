var db = require('./db');

module.exports={



    get: function(userId, callback){
		var sql = "select * from moderator where id=?";

		db.getResult(sql, [userId], function(result){
			callback(result);
		});
	},

	getAll: function(callback){
		var sql = "select * from moderator";
		db.getResult(sql, [], function(results){
			callback(results);
		});
	},

	
	delete: function(userId, callback){
		var sql = "delete from moderator where id=?";
		db.execute(sql, [userId], function(status){
			callback(status);
		});
	},

	 insert: function(moderator, callback){
		var sql = "insert into moderator values (null,?,?,?)";
		db.execute(sql, [moderator.username,moderator.email, moderator.password], function(status){
			callback(status);
		});
	},

	
	validate: function(moderator, callback){
		var sql = "select username,password from moderator where username=? and password=?";

		db.getResult(sql, [moderator.username, moderator.password], function(result){
			callback(result);
		});
	},


//////////////////////////inserting movie table ////////////////

insertcontent: function(content, callback){
		var sql = "insert into content values (null,?,?,?)";
		db.execute(sql, [content.type,content.title, content.link], function(status){
			callback(status);
		});
	},

	////////////////////////////movielist//////////////////////
	getAllmovie: function(callback){
		var sql = "select * from content ";  
		//var sql = "select * from content where type=Bangla";  
		db.getResult(sql, [], function(results){
			callback(results);
		});
	},

//////////////////////////////mediacontent//////////////
getAllcon: function(callback){
		var sql = "select * from content";
		db.getResult(sql, [], function(results){
			callback(results);
		});
	},









////////////////////////delete movie///////////////
deletemo: function(userId, callback){
		var sql = "delete from content where id=?";
		db.execute(sql, [userId], function(status){
			callback(status);
		});
	},

    getmo: function(userId, callback){
		var sql = "select * from content where id=?";

		db.getResult(sql, [userId], function(result){
			callback(result);
		});
	},


	getAllcon: function(callback){
		var sql = "select * from content";
		db.getResult(sql, [], function(results){
			callback(results);
		});
	},


	insertme: function(content, callback){
		var sql = "insert into content values (null,?,?,?)";
		db.execute(sql, [content.type,content.title, content.link], function(status){
			callback(status);
		});
	},


/////////////////////////////////////all function for member////////////////////////////


getAllbanglamovie: function(callback){
		var sql = "select * from content where type='Bangla'";  
		//var sql = "select * from content where type=Bangla";  
		db.getResult(sql, [], function(results){
			callback(results);
		});
	},

getAllhindimovie: function(callback){
		var sql = "select * from content where type='Hindi'";  
		//var sql = "select * from content where type=Bangla";  
		db.getResult(sql, [], function(results){
			callback(results);
		});
	},


	getAllenglishmovie: function(callback){
		var sql = "select * from content where type='English'";  
		//var sql = "select * from content where type=Bangla";  
		db.getResult(sql, [], function(results){
			callback(results);
		});
	},

	getAllbanglatv: function(callback){
		var sql = "select * from content where type='TvSeriesBangla'";  
		//var sql = "select * from content where type=Bangla";  
		db.getResult(sql, [], function(results){
			callback(results);
		});
	},



insertre: function(request, callback){
		var sql = "insert into request values (null,?,?,?)";
		db.execute(sql, [request.username,request.email, request.dcontent], function(status){
			callback(status);
		});
	},

getAllre: function(callback){
		var sql = "select * from request";
		db.getResult(sql, [], function(results){
			callback(results);
		});
	}



}

	