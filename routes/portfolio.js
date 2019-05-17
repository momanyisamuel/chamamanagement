const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Models = require('../models');


//show portfolio
router.get('/', (req,res) => 
Models.Portfolio.findAll()
 .then( Portfolio => { 
    res.render('./portfolio/portfolio', {
        Portfolio
    })
  })
  .catch(err => {
    console.log( err);
  })
)

//add a Votes
// router.get("/add", (req, res) => res.render('./chamas/chamas'));
router.post('/add', (req, res) => {

    let { name, category, assetFlag, description, amount, dateRecorded, refDetails, comment } = req.body;

    Models.Portfolio.create({
        name, category, assetFlag, description, amount, dateRecorded, refDetails, comment 
    })
    .then(Portfolio => res.redirect('/portfolio'))
    .catch(err => console.log(err))
})

//delete

router.get('/:id', (req, res) => { 
    console.log(req.params);
    // Chama.findOne({where:{ id : req.params.id }}).then({
    //     var delId = req.params.id
    // })
    Models.Portfolio.destroy({
      where:{ id : req.params.id}
    })
    .then(() => {
      res.redirect('/portfolio')
    })
    .catch(err => console.log(err))
})

module.exports = router;