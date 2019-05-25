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
//decline status

