const Models =  require('../models');


//show loans
module.exports.showLoans = (req,res) => {
Models.Loans.findAll()
 .then( Loans => { 
    res.render('./loans/loans', {
        Loans
    })
  })
  .catch(err => {
    console.log( err);
  })
}

//add a Loan
// router.get("/add", (req, res) => res.render('./chamas/chamas'));
module.exports.addLoans = (req, res) => {

    let { loanAmount, duration, interestRate } = req.body;

    Models.Loans.create({
        loanAmount, duration, interestRate 
    })
    .then(Loans => res.redirect('/loans'))
    .catch(err => console.log(err))
}

//delete
module.exports.deleteLoans = (req, res) => { 
    console.log(req.params);
    // Chama.findOne({where:{ id : req.params.id }}).then({
    //     var delId = req.params.id
    // })
    Models.Loans.destroy({
      where:{ id : req.params.id}
    })
    .then(() => {
      res.redirect('/loans')
    })
    .catch(err => console.log(err))
}

