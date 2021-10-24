const express = require('express');
const { getAllPurchases, getPurchase, createPurchase, deletePurchase, updatePurchase } = require('../controllers/purchases.js');


const router = express.Router();

// Routes
router.get('/', getAllPurchases);
router.post('/', createPurchase);
router.get('/:id', getPurchase);
router.delete('/:id', deletePurchase);
router.patch('/:id', updatePurchase);


module.exports = router;