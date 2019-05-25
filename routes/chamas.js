const express = require('express');
const router = express.Router();
const controller = require('../controllers/ChamaController');

//show chamas
router.get('/', controller.showChamas)
//add a chama
router.post('/add', controller.addChamas)
//edit a chama
//router.get('/edit/:id', controller.editChamas)
//delete
router.get('/:id', controller.deleteChamas)


module.exports = router;