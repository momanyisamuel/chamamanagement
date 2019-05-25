const Models = require('../models');


//show fines
module.exports.showFines = (req,res) => { 
Models.Fines.findAll()
 .then( Fines => { 
    res.render('./fines/fines', {
        Fines
    })
  })
  .catch(err => {
    console.log( err);
  })
}


// router.get("/add", (req, res) => res.render('./chamas/chamas'));
module.exports.addFines= (req, res) => {

    let { fineDate, fineAmount, fineCategory } = req.body;

    Models.Fines.create({
        fineDate, fineAmount, fineCategory 
    })
    .then(Fines => res.redirect('/fines'))
    .catch(err => console.log(err))
}


//delete


module.exports.deleteFines = (req, res) => { 
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
}

