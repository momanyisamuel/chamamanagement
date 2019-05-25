const express = require('express');
const router = express.Router();
const controller = require('../controllers/PortfolioController');

//show Portfolio
router.get('/', controller.showPortfolio)
//add a Portfolio
router.post('/add', controller.addPortfolio)
//edit a Portfolio
//router.get('/edit/:id', controller.editPortfolio)
//delete Portfolio
router.get('/:id', controller.deletePortfolio)

module.exports = router;