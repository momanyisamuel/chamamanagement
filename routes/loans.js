const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Loans = require('../models/loans');

router.get("/", (req, res) => res.render('loans'));


module.exports = router;