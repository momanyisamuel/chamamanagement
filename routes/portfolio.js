const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Portfolio = require('../models/portfolio');

router.get("/", (req, res) => res.render('portfolio'));


module.exports = router;