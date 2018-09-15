module.exports = {

  index : function(req, res, next){
    //enviar el usuario que está actualmente en el sistema
    res.render('home', {
      isAuthenticated : req.isAuthenticated(),
      user : req.user
    });
  }
}