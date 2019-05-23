const express = require('express');
const router = express.Router();
const Models = require('../models');


//show chamas
router.get('/', (req,res) => res.render('./dashboard/dashboard'))

router.post('/addchama', (req,res) => {
    let { name, country } = req.body;

    Models.Chama.create({
      name,country
    })
    .then(Chamas => res.redirect('/chamas/'))
    .catch(err => console.log(err))
})


module.exports = router;