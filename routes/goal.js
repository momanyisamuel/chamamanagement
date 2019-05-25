const express = require('express');
const router = express.Router();
const controller = require('../controllers/GoalsController');

//show Goals
router.get('/', controller.showGoals)
//add a Goals
router.post('/add', controller.addGoals)
//edit a Goals
//router.get('/edit/:id', controller.editGoals)
//delete Goals
router.get('/:id', controller.deleteGoals)

module.exports = router;