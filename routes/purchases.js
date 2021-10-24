const express = require('express');
const {getAllPurchases, getPurchase} = require('../controllers/purchases.js');


const router = express.Router();
// Routes

router.get('/',getAllPurchases);
router.get('/:id',getPurchase);


module.exports = router;