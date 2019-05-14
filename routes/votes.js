const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Votes = require('../models/votes');

router.get("/", (req, res) => res.render('votes'));


module.exports = router;