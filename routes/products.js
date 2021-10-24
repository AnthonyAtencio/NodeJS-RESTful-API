const express = require('express');

const { getAllProducts, getProduct, createProduct,
    deleteProduct, updateProduct } = require('../controllers/products.js');

const router = express.Router();

router.get('/', getAllProducts);

router.post('/', createProduct);

router.get('/:id', getProduct);

router.delete('/:id', deleteProduct);

router.patch('/:id', updateProduct);

module.exports = router;

