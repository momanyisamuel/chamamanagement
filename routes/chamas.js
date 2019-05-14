const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Chama = require('../models/Chama');

router.get("/", (req, res) => res.render('chamas'));


module.exports = router;