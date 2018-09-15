var mysql = require('mysql');
var bcrypt = require('bcryptjs');

 module.exports = {

 	getSignUp : function(req, res, next){
 		return res.render('users/signup');
 	},

 	postSignUp : function(req, res, next){
 		var = salt = bcrypt.genSaltSync(10);

 		var password = bcrypt.hashSync(req.body.password, salt);

 		var user = {
 			email : req.body.email,
 			nombre : req.body. nombre,
 			documento: req.body.doc,
 			password : password
 		};

 		db.connect();

 		db.query('INSERT INTO users SET ?', user, function(err, rows, field){
 			if(err) throw err;

 			db.end();
 		});

 		req.flsh('info', 'Se ha registrado satisfactoriamente')

 		return res.redirect('/signin');
 	},

 	getSignIn : function(req, res, next){
 		return res.render('users/signin', {message: req.flash('info'), authmessage : req.flash('authmessage')});
 	},

 	logout : function(req, res, next){
 		req.logout();
 		res.redirect('/signin');
 	},

 	getUserPerfil : function(req, res, next){
       res.render('users/perfil'), {
       	isAuthenticated : req.isAuthenticated(),
       	user : req.user
       });
 	},

 	getUserRedimir : function(req, res, next){
 		res.render('users/redimir'), {
 		 isAuthenticated : req.isAuthenticated(),
 		 user : req.user	
 		});
 	},

 	getUserInsignias : function(req, res, next){
 		res.render('users/insignias'), {
 			isAuthenticated : req.isAuthenticated(),
 			user : req.user
 		});
 	},

 	getUserCatalogo : function(req, res, next){
 		res.render('users/catalogo'), {
 			isAuthenticated : req.isAuthenticated(){
 				user : req.user
 		});
 	}
 };



