// Rutes orders ---- host + /api/orders
const express = require('express');
const { check } = require('express-validator');
const { validateJWT } = require('../middlewares/validateJWT');
const { validateFields } = require('../middlewares/validateFields');
const { getOrders, createOrder } = require('../controllers/order');
const { isDate } = require('../helpers/isDate');

const router = express.Router();

router.use( validateJWT )

router.get('/', getOrders)

router.post(
    '/',     
    [
        check('date', 'Date is required' ).custom( isDate ),
        check('total', 'Total should be number' ).isNumeric(),
        validateFields
    ],  
    createOrder)

module.exports = router;