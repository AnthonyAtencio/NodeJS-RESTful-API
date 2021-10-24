const express = require('express');
const {buyProduct} = require('../controllers/functions.js');

const router = express.Router();

// Operaciones
router.post('/buy', buyProduct);
//
module.exports = router;