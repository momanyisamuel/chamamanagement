const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Models = require('../models');


//show fines
router.get('/', (req,res) => 
Models.Fines.findAll()
 .then( Fines => { 
    res.render('./fines/fines', {
        Fines
    })
  })
  .catch(err => {
    console.log( err);
  })
)

//add an invoice
// router.get("/add", (req, res) => res.render('./chamas/chamas'));
router.post('/add', (req, res) => {

    let { fineDate, fineAmount, fineCategory } = req.body;

    Models.Fines.create({
        fineDate, fineAmount, fineCategory 
    })
    .then(Fines => res.redirect('/fines'))
    .catch(err => console.log(err))
})

//delete


router.get('/:id', (req, res) => { 
    console.log(req.params);
    // Chama.findOne({where:{ id : req.params.id }}).then({
    //     var delId = req.params.id
    // })
    Models.Fines.destroy({
      where:{ id : req.params.id}
    })
    .then(() => {
      res.redirect('/fines')
    })
    .catch(err => console.log(err))
})



module.exports = router;