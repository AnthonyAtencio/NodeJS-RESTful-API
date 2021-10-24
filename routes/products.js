const express = require('express');

const { getAllProducts, getProduct, createProduct,
    deleteProduct, updateProduct,addProductStock} = require('../controllers/products.js');

const router = express.Router();

// Operaciones
router.get('/', getAllProducts);

router.post('/', createProduct);

router.get('/:id', getProduct);

router.delete('/:id', deleteProduct);

router.patch('/:id', updateProduct);

router.patch('/:id/:quantity',addProductStock);
//
module.exports = router;

