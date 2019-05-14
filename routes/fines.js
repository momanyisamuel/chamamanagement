const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Fines = require('../models/Fines');

router.get("/", (req, res) => res.render('fines'));


module.exports = router;