const Models = require('../models');


// Show all contributions for a group
module.exports.showContributions = (req,res) => {
Models.Contributions.findAll()
 .then( Contributions => { 
    res.render('./contributions/contributions', {
        Contributions
    })
  })
  .catch(err => {
    console.log( err);
  })
}

//add an Contribution
module.exports.addContributions = (req, res) => {

    let { depositDate, payRefNumber, depositAmount, fundAssignment, comment } = req.body;

    Models.Contributions.create({
        depositDate, payRefNumber, depositAmount, fundAssignment, comment 
    })
    .then(Contributions => res.redirect('/contributions'))
    .catch(err => console.log(err))
}

// //edit Contribution
// module.exports.editContribution = (req, res) => { 
  
//     Models.Contributions.findOne({
//       where:{ id : req.params.id},
//       include : [{
//         model : Models.User
//      }]
//     })
//     .then(Contributions => { 
            
//       res.render('./contributions/edit', {
//           Chamas
//       })
//     })
//     .catch(err => console.log(err))
// }


//delete Contribution - should this be possible?
module.exports.deleteContributions =  (req, res) => { 
    //console.log(req.params);
    // Chama.findOne({where:{ id : req.params.id }}).then({
    //     var delId = req.params.id
    // })
    Models.Contributions.destroy({
      where:{ id : req.params.id}
    })
    .then(() => {
      res.redirect('/contributions')
    })
    .catch(err => console.log(err))
}


