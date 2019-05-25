const express = require('express');
const router = express.Router();
const controller = require('../controllers/LoansController');

//show Loans
router.get('/', controller.showLoans)
//add a Loans
router.post('/add', controller.addLoans)
//edit a Loans
//router.get('/edit/:id', controller.editLoans)
//delete Loans
router.get('/:id', controller.deleteLoans)

module.exports = router;