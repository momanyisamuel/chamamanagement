const express = require('express');
const router = express.Router();
const Models = require('../models');

//show goals
router.get('/', (req,res) => 
Models.Goal.findAll()
 .then( Goal => { 
    console.log(Goal)
    res.render('./goal/goal', {
        Goal
    })
  })
  .catch(err => {
    console.log( err);
  })
)

//add an goal

router.post('/add', (req, res) => {

    let { name, duration, riskRanking } = req.body;

    Models.Goal.create({
        name, duration, riskRanking
    })
    .then(Goal => res.redirect('/goal'))
    .catch(err => console.log(err))
})

//delete


router.get('/:id', (req, res) => { 
    console.log(req.params);
    // Chama.findOne({where:{ id : req.params.id }}).then({
    //     var delId = req.params.id
    // })
    Models.Goal.destroy({
      where:{ id : req.params.id}
    })
    .then(() => {
      res.redirect('/goal')
    })
    .catch(err => console.log(err))
})


module.exports = router;