const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Models = require('../models');


//show votes
router.get('/', (req,res) => 
Models.Votes.findAll()
 .then( Votes => { 
    res.render('./votes/votes', {
        Votes
    })
  })
  .catch(err => {
    console.log( err);
  })
)

//add a Votes
// router.get("/add", (req, res) => res.render('./chamas/chamas'));
router.post('/add', (req, res) => {

    let { question, description, answer, pollDate } = req.body;

    Models.Votes.create({
        question, description, answer, pollDate 
    })
    .then(Votes => res.redirect('/votes'))
    .catch(err => console.log(err))
})

//delete

router.get('/:id', (req, res) => { 
    console.log(req.params);
    // Chama.findOne({where:{ id : req.params.id }}).then({
    //     var delId = req.params.id
    // })
    Models.Votes.destroy({
      where:{ id : req.params.id}
    })
    .then(() => {
      res.redirect('/votes')
    })
    .catch(err => console.log(err))
})

module.exports = router;