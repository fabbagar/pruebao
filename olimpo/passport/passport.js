var LocalStartegy = require('passport-local').Strategy;
var mysql = require('mysql');
var bcrypt = require('bcryptjs');

module.exports = function(passport){
	passport.serializerUser(function(user, done){
      done(null, user);
	});

	passport.deserializerUser(function(obj, done){
      done(null, obj);
	});

	passport.use(new LocalStartegy({
		passReqToCallback : true
	},  function(req, email, password, done){

		var config = require('.././databasemysql/config');

		var db = mysql.createConnection(config);
		db.connect();

		db.query('SELECT * FROM users  WHERE email = ?', email, function(err, rows, failed){
			if(err) throw err;

			db.end();

			if(rows.length > 0){
				var user = rows[0];

                if(bcrypt.compareSync(password, user.password)){
                   return done(null, {
               	     id: user.id,
               	     nombre: user.nombre,
               	     email: user.email,
               	     documento: user.doc
                     });

                }
			}

			return done(null, false, req.flash('authmessage', 'Email o contraseña incorrectos'));
		});
	}

	));
};