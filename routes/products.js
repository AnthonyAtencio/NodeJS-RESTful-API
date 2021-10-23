const  express = require('express');
const { getProducts } = require('../controllers/products.js');
const {getProducts, getProduct, createProduct,
    deleteProduct,updateProduct} = require('../controllers/products.js');

const router = express.Router();

router.get('/',getProducts);

// router.post('/',createProduct);

// router.get('/:id',getProduct);

// router.delete('/:id',deleteProduct);

// router.patch('/:id',updateProduct);

module.exports= router;

