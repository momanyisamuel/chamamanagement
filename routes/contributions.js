const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Contributions = require('../models/Contributions');

router.get("/", (req, res) => res.render('contributions'));


module.exports = router;