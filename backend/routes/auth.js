// Rutes users ---- host + /api/auth 

const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();

const { signUp, signIn, revalidateJWT } = require('../controllers/auth')


router.post(
    '/register', 
    [//midleware
        check('name', 'Name is required' ).not().isEmpty(),
        check('email', 'Email is required' ).isEmail(),
        check('password', 'Password must be 8 or more characters' ).isLength({ min:8 })
    ],
    signUp);

router.post(
    '/',
    [
        check('email', 'Email is required' ).isEmail(),
        check('password', 'Password must be 8 or more characters' ).isLength({ min:8 })
    ],
    signIn);

router.post('/renew', revalidateJWT);


module.exports = router;