const Models = require('../models');

//show votes
module.exports.showVotes = (req,res) => {
Models.Votes.findAll()
 .then( Votes => { 
    res.render('./votes/votes', {
        Votes
    })
  })
  .catch(err => {
    console.log( err);
  })
}

//add a Votes
// router.get("/add", (req, res) => res.render('./chamas/chamas'));
module.exports.addVotes = (req, res) => {

    let { question, description, answer, pollDate } = req.body;

    Models.Votes.create({
        question, description, answer, pollDate 
    })
    .then(Votes => res.redirect('/votes'))
    .catch(err => console.log(err))
}

//delete

module.exports.deleteVotes = (req, res) => { 
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
}
