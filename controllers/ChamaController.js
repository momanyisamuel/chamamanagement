const Models = require('../models');
const exphbs = require('express-handlebars');


module.exports.showChamas = (req,res) => {
    Models.Chama.findAll()
    .then( Chamas => { 
        // console.log(Chamas)
        res.render('./chamas/chamas', {
            Chamas
        })
    })
    .catch(err => {
        console.log( err);
    })
}

module.exports.addChamas = (req, res) => {

    let { name, country } = req.body;

    Models.Chama.create({
      name,country
    })
    .then(Chamas => res.redirect('/chamas'))
    .catch(err => console.log(err))
}

module.exports.editChamas = (req, res) => { 
    
    Models.Chama.findOne({
      where:{ id : req.params.id},
      include : [{
        model : Models.User
     }]
    })
    .then(Chamas => {          
            
      res.render('./chamas/edit', {
          Chamas
      })
    })
    .catch(err => console.log(err))
}

module.exports.deleteChamas = (req, res) => { 

    Models.Chama.destroy({
      where:{ id : req.params.id}
    })
    .then(() => {
      res.redirect('/chamas')
    })
    .catch(err => console.log(err))
}

//accept status
module.exports.acceptInvite = (req, res) => { 
    
    Models.Chama.findOne({
      where:{ id : req.params.id},
      include : [{
        model : Models.User
     }]
    })
    .then(Chamas => {          
      res.render('./chamas/accept', {
          Chamas
      })
    })
    .catch(err => console.log(err))
}
//decline status
module.exports.declineInvite = (req, res) => { 
    
    Models.Chama.findOne({
      where:{ id : req.params.id},
      include : [{
        model : Models.User
     }]
    })
    .then(Chamas => {          
      res.render('./chamas/decline', {
          Chamas
      })
    })
    .catch(err => console.log(err))
}

module.exports.addUsers = (req, res) => {
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
    .then(User => res.redirect('/chamas'))
    .catch(err => console.log(err))
}