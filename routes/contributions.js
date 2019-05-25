const express = require('express');
const router = express.Router();
const controller = require('../controllers/ContributionController');

//show Contributions
router.get('/', controller.showContributions)
//add a Contributions
router.post('/add', controller.addContributions)
//edit a Contributions
//router.get('/edit/:id', controller.editContributions)
//delete Contributions
router.get('/:id', controller.deleteContributions)

module.exports = router;