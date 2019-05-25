const Models =  require('../models');

//show goals
module.exports.showGoals = (req,res) => {
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
}


//add an goal
module.exports.addGoals = (req, res) => {

    let { name, duration, riskRanking } = req.body;

    Models.Goal.create({
        name, duration, riskRanking
    })
    .then(Goal => res.redirect('/goal'))
    .catch(err => console.log(err))
}

//delete

module.exports.deleteGoals = (req, res) => { 
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
}