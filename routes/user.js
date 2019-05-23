const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Models = require('../models/');


//show users
router.get('/', (req,res) => 
Models.User.findAll()
 .then( User => { 
    console.log(User)
    res.render('./user/register', {
        User
    })
  })
  .catch(err => {
    console.log( err);
  })
)

//add an invoice
router.post('/add', (req, res) => {

    let { firstname, lastname, email, password, userStatus } = req.body;

    Models.User.create({
        firstname, lastname, email, password, userStatus
    })
    .then(User => res.redirect('/user'))
    .catch(err => console.log(err))
})

//delete
router.get('/:id', (req, res) => { 
    console.log(req.params);
    // Chama.findOne({where:{ id : req.params.id }}).then({
    //     var delId = req.params.id
    // })
    Models.User.destroy({
      where:{ id : req.params.id}
    })
    .then(() => {
      res.redirect('/user')
    })
    .catch(err => console.log(err))
})


module.exports = router;