var express = require('express');
var router = express.Router();
var passport = require('passport');
var controllers = require('.././controllers');
var AuthMiddleware = require('.././middleware/auth');

router.get('/', controllers.HomeController.index);


router.get('/signup', controllers.UserController.getSignUp);

router.post('/signup', controllers.UserController.postSignUp);

router.get('/signin', controllers.UserController.getSignUp);

router.post('/signin', passport.authenticate('local', {
  successRediredct : '/users/perfil',
  failureRedirect : '/signin', 
  failureFlash : true
}));

router.get('/logout', controllers.UserController.logout);

module.exports = router;


router.get('/users/perfil', AuthMiddleware.isLogged, controllers.UserController.getUserPerfil);
router.get('/users/catalogo', AuthMiddleware.isLogged, controllers.UserController.getUserCatalogo);
router.get('/users/insignias', AuthMiddleware.isLogged, controllers.UserController.getUserInsignias);
router.get('/users/redimir', AuthMiddleware.isLogged, controllers.UserController.getUserRedimir);