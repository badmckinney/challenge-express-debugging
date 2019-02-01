const express = require('express');
const router = express.Router();

const get = require('./get/index');

router.get('/contact', get);

module.exports = router;
