const Models =  require('../models');

//show portfolio
module.exports.showPortfolio = (req,res) => {
Models.Portfolio.findAll()
 .then( Portfolio => { 
    res.render('./portfolio/portfolio', {
        Portfolio
    })
  })
  .catch(err => {
    console.log( err);
  })
}

//add a Votes
// router.get("/add", (req, res) => res.render('./chamas/chamas'));
module .exports.addPortfolio = (req, res) => {

    let { name, category, assetFlag, description, amount, dateRecorded, refDetails, comment } = req.body;

    Models.Portfolio.create({
        name, category, assetFlag, description, amount, dateRecorded, refDetails, comment 
    })
    .then(Portfolio => res.redirect('/portfolio'))
    .catch(err => console.log(err))
}

//delete
module.exports.deletePortfolio = (req, res) => { 
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
}
