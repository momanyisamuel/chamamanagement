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

      // let { firstname, lastname, email, password, userStatus } = req.body;

      let data = [req.body]
      console.log(data)
      // data.forEach((item) => {
      //   console.log(item.firstname)
      // });
      passData = []
      for(let i = 0; i<data.length; i++){
          for(let j = 0; j<data[i].firstname.length; j++){
              // console.log(data[i].email[j])
              passData.push({firstName : data[i].firstname[j],email : data[i].email[j], userStatus : data[i].userStatus[j], ChamaId : data[i].ChamaId[j] })  
          }
      }
      console.log(passData)
      Models.User.bulkCreate(passData)
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