const express = require('express');
const router = express.Router();
const Models = require('../models');
const auth = require('../config/auth')


//show dashboard
router.get('/', auth.ensureAunthenticated, (req,res) => {
  // console.log(req.session.passport.user)
  const userData = []
  Models.Chama.findAll({include : [ { model : Models.User } ] })
  .then( Chamas => {
    // console.log(Chamas)
    Chamas.forEach(element => {
      // console.log(element.Users)  
      element.Users.forEach(d =>{
        if(d.id === req.session.passport.user) {
          console.log(d.email)
        }
      })    
    });
  })
  .catch(err => console.log(err))
  res.json
})

router.post('/addchama', (req,res) => {
    let { name, country } = req.body;
    
    Models.Chama.create({
      name,country
    })
    .then(Chamas => res.redirect('/chamas/'))
    .catch(err => console.log(err))
})


module.exports = router;