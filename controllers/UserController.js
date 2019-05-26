const Models = require("../models");


//show users
module.exports.showUser = (req,res) => {
Models.User.findAll()
 .then( User => { 
    console.log(User)
    res.render('./user/register', {
        User
    })
  })
  .catch(err => {
    console.log( err);
  })
}

//add a User
module.exports.addUser = (req, res) => {
    let { firstname, lastname, email, password, userStatus } = req.body;

    Models.User.create({
      firstname, lastname, email, password, userStatus
    })
    .then(User => res.redirect('/user'))
    .catch(err => console.log(err))
}

//delete
module.exports.deleteUser = (req, res) => { 
    console.log(req.params);
    // Chama.findOne({where:{ id : req.params.id }}).then({
    //     var delId = req.params.id
    // })
    Models.User.destroy({
      where:{ id : req.params.id}
    })
    .then(() => {
      res.redirect('/user')
    })
    .catch(err => console.log(err))
}

