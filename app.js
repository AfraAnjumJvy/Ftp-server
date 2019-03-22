var express 		= require('express');
var bodyParser 		= require('body-parser');
var exSession 		= require('express-session');
var cookieParser 	= require('cookie-parser');
var adminlogin			= require('./controllers/adminlogin');
var adminhome		= require('./controllers/adminhome');

var home			= require('./controllers/home');
var logout			= require('./controllers/logout');
/////////////////////////moderator////////////////////


var moderatorhome		= require('./controllers/moderatorhome');
var moderatorlogin			= require('./controllers/moderatorlogin');

///////////////////////////////////member////////////////////////////////


var memberlogin			= require('./controllers/memberlogin');
var memberhome		= require('./controllers/memberhome');





/*var db = require('./model/db');*/
/*var expressValidator = require('express-validator');*/

var multer = require('multer');
var path = require('path');

var app  			= express();
var port 			= 3000;

app.set('view engine', 'ejs');


app.use(exSession({secret: 'my top secret code', saveUninitialized: true, resave: false}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

/*app.use(bodyParser.json());
app.use(expressValidator());
app.use('/api', router);*/
app.use('/', home);
app.use('/adminlogin', adminlogin);
app.use('/adminhome', adminhome);
app.use('/logout', logout);


//////////////////////////moderator///////////////////
app.use('/moderatorlogin', moderatorlogin);
app.use('/moderatorhome', moderatorhome);

//////////////////////member///////////////////////////////////

app.use('/memberlogin', memberlogin);
app.use('/memberhome', memberhome);



app.use('/assets', express.static('assets'));



app.get('/', (req,res)=>res.send('Index page'));
app.get('/setCookie', (req,res)=>{
	res.cookie('cookie1', 'first cookie');
	res.send("done");
});

app.get('/viewCookie', (req,res)=>{
	res.send(req.cookies['cookie1']);
});

app.get('/rmCookie', (req,res)=>{
	res.clearCookie('cookie1');
	res.send('Done');
});


//SERVER STARTUP
app.listen(port, ()=>console.log('server started at' +port+ "..."));