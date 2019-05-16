const express = require('express');
const router = express.Router();
const Chama = require('../models').Chama;




//show chamas
router.get('/', (req,res) => 
Chama.findAll()
 .then( Chamas => { 
    console.log(Chamas)
    res.render('./chamas/viewChamas', {
        Chamas
    })
  })
  .catch(err => {
    console.log( err);
  })
)

//add an invoice
router.get("/add", (req, res) => res.render('./chamas/chamas'));
router.post('/add', (req, res) => {

    let { name, country } = req.body;

    Chama.create({
      name,country
    })
    .then(Chamas => res.redirect('./chamas'))
    .catch(err => console.log(err))
})

//delete


router.get('/:id', (req, res) => { 
    // console.log(req.params[0].id);
    // Chama.findOne({where:{ id : req.params.id }}).then({
    //     var delId = req.params.id
    // })
    Chama.destroy({
      where:{ id : req.params.id}
    })
    .then(() => {
      res.redirect('./chamas/')
    })
    .catch(err => console.log(err))
})


module.exports = router;