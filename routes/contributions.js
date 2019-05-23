const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Models = require('../models');


//show contributions
router.get('/', (req,res) => 
Models.Contributions.findAll()
 .then( Contributions => { 
    res.render('./contributions/contributions', {
        Contributions
    })
  })
  .catch(err => {
    console.log( err);
  })
)

//add an Contribution
// router.get("/add", (req, res) => res.render('./chamas/chamas'));
router.post('/add', (req, res) => {

    let { depositDate, payRefNumber, depositAmount, fundAssignment, comment } = req.body;

    Models.Contributions.create({
        depositDate, payRefNumber, depositAmount, fundAssignment, comment 
    })
    .then(Contributions => res.redirect('/contributions'))
    .catch(err => console.log(err))
})

//delete

router.get('/:id', (req, res) => { 
    console.log(req.params);
    // Chama.findOne({where:{ id : req.params.id }}).then({
    //     var delId = req.params.id
    // })
    Models.Contributions.destroy({
      where:{ id : req.params.id}
    })
    .then(() => {
      res.redirect('/contributions')
    })
    .catch(err => console.log(err))
})


module.exports = router;