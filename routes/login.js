const express = require('express');
const router = express.Router();
const Models = require('../models');
const passport = require('passport')

//show login form
router.get("/", (req, res) => res.render('./user/login'));

router.post('/login',(req,res,next) => {
  passport.authenticate('local', { 
      successRedirect: '/user',
      failureRedirect: '/'
    })(req,res,next);
});


router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
});


module.exports = router;