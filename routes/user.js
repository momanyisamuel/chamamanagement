const express = require('express');
const router = express.Router();
const controller = require('../controllers/UserController');

//show User
router.get('/', controller.showUser)
//add a User
router.post('/add', controller.addUser)
//edit a User
//router.get('/edit/:id', controller.editUser)
//delete User
router.get('/:id', controller.deleteUser)

module.exports = router;