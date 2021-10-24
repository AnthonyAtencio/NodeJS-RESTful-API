const express = require('express');

const { getAllCategories, getCategory, createCategory,
    deleteCategory, updateCategory } = require('../controllers/categories.js');

const router = express.Router();

// Operaciones
router.get('/', getAllCategories);

router.post('/', createCategory);

router.get('/:id', getCategory);

router.delete('/:id', deleteCategory);

router.patch('/:id', updateCategory);

//
module.exports = router;