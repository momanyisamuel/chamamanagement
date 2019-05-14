const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Contributions = require('../models/contributions');

router.get("/", (req, res) => res.render('contributions'));


module.exports = router;