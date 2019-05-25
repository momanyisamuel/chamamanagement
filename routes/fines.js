const express = require('express');
const router = express.Router();
const controller = require('../controllers/FinesController');

//show Fines
router.get('/', controller.showFines)
//add a Fines
router.post('/add', controller.addFines)
//edit a Fines
//router.get('/edit/:id', controller.editFines)
//delete Fines
router.get('/:id', controller.deleteFines)

module.exports = router;