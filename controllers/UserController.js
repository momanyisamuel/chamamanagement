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

      // let { firstname, lastname, email, password, userStatus } = req.body;

      let data = [req.body]
      console.log(data)
      // data.forEach((item) => {
      //   console.log(item.firstname)
      // });
      passData = []
      for(let i = 0; i<data.length; i++){
          for(let j = 0; j<data[i].firstname.length; j++){
              // console.log(data[i].email[j])
              passData.push({firstName : data[i].firstname[j],email : data[i].email[j], userStatus : data[i].userStatus[j], ChamaId : data[i].ChamaId[j] })  
          }
      }
      console.log(passData)
      Models.User.bulkCreate(passData)
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

