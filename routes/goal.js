const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Goal = require('../models/goal');

router.get("/", (req, res) => res.render('goal'));


module.exports = router;