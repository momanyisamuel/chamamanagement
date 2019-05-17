const express = require('express');
const router = express.Router();
const Models = require('../models');




//show chamas
router.get('/', (req,res) => 
Models.Chama.findAll()
 .then( Chamas => { 
    console.log(Chamas)
    res.render('./chamas/chamas', {
        Chamas
    })
  })
  .catch(err => {
    console.log( err);
  })
)

//add an invoice
// router.get("/add", (req, res) => res.render('./chamas/chamas'));
router.post('/add', (req, res) => {

    let { name, country } = req.body;

    Models.Chama.create({
      name,country
    })
    .then(Chamas => res.redirect('/chamas'))
    .catch(err => console.log(err))
})

//delete


router.get('/:id', (req, res) => { 
    console.log(req.params);
    // Chama.findOne({where:{ id : req.params.id }}).then({
    //     var delId = req.params.id
    // })
    Models.Chama.destroy({
      where:{ id : req.params.id}
    })
    .then(() => {
      res.redirect('/chamas')
    })
    .catch(err => console.log(err))
})


module.exports = router;