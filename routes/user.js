const express = require('express');
const router = express.Router();
const db = require('../config/database');
const User = require('../models/user');

router.get("/", (req, res) => res.render('user'));


module.exports = router;