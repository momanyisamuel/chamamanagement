const express = require('express');
const router = express.Router();
const Models = require('../models');
var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

  passport.use(new LocalStrategy({
    usernameField: 'email'
  },
    function(email, password, done) {
        Models.User.findOne({ where: { email: email } })
        .then(function (user) {
            console.log(user)
            if (!user) {
                return done(null, false, { message: 'Incorrect username.' });
            }
            if (!user.password === password) {
                return done(null, false, { message: 'Incorrect password.' });
            }
            return done(null, user);
        })
        .catch(err => done(err));
    }
));

passport.serializeUser(function(user, done) {
    done(null, user.id);
});
  
passport.deserializeUser(function(id, done) {
    Models.User.findOne({id}).then(user => {
        done(null, user);
        console.log(id);
      }).catch(err => done(err))
});

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