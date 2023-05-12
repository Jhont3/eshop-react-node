// Rutes users ---- host + /api/auth 
const { Router } = require('express');
const { check } = require('express-validator');
const { signUp, signIn, revalidateJWT } = require('../controllers/auth');
const { validateFields } = require('../middlewares/validateFields');
const { validateJWT } = require('../middlewares/validateJWT');

const router = Router();

router.post(
    '/register', 
    [//midleware
        check('name', 'Name is required' ).not().isEmpty(),
        check('email', 'Email is required' ).isEmail(),
        check('password', 'Password must be 8 or more characters' ).isLength({ min:8 }),
        validateFields
    ],
    signUp
);

router.post(
    '/',
    [
        check('email', 'Email is required' ).isEmail(),
        check('password', 'Password must be 8 or more characters' ).isLength({ min:8 }),
        validateFields
    ],
    signIn
);

router.get('/renew', validateJWT ,revalidateJWT);


module.exports = router;
