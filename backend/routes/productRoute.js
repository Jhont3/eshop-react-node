// Rutes products ---- host + /api/products
const express = require('express');
const { getProducts, createProduct, updateProduct, deleteProduct } = require('../controllers/product');
const { validateJWT } = require('../middlewares/validateJWT');

const router = express.Router();

router.get('/', getProducts)

router.use( validateJWT )

router.post('/', createProduct)
router.put('/:id', updateProduct)
router.delete('/:id', deleteProduct)

module.exports = router;