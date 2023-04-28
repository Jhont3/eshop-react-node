// Rutes products ---- host + /api/products
const express = require('express');
const { check } = require('express-validator');
const { getProducts, createProduct, updateProduct, deleteProduct } = require('../controllers/product');
const { validateJWT } = require('../middlewares/validateJWT');
const { validateFields } = require('../middlewares/validateFields')

const router = express.Router();


router.get('/', getProducts)

router.use( validateJWT )


router.post(
    '/',     
    [
        check('name', 'Name is required' ).notEmpty(),
        check('description', 'Description is required' ).notEmpty(),
        check('image', 'At leat one image is required' ).notEmpty(),
        check('price', 'Price is required' ).notEmpty(),
        check('price', 'Price has to be a number' ).isNumeric(),
        check('numberInStock', 'number in stock is required').notEmpty(),
        check('numberInStock', 'number in stock has to be a number').isNumeric(),
        validateFields
    ],  
    createProduct)

router.put(
    '/:id', 
    [
        check('name', 'Name is required' ).notEmpty(),
        check('description', 'Description is required' ).notEmpty(),
        check('image', 'At leat one image is required' ).notEmpty(),
        check('price', 'Price is required' ).notEmpty(),
        check('price', 'Price has to be a number' ).isNumeric(),
        check('numberInStock', 'number in stock is required').notEmpty(),
        check('numberInStock', 'number in stock has to be a number').isNumeric(),
        validateFields
    ],  
    updateProduct)

router.delete('/:id', deleteProduct)

module.exports = router;