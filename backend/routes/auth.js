// Rutes users ---- host + /api/auth 

const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();

const { signUp, signIn, revalidateJWT } = require('../controllers/auth')


router.post(
    '/register', 
    [//midleware
        check('name', 'El nombre es obligatorio' ).not().isEmpty()
    ],
    signUp);

router.post('/', signIn);

router.post('/renew', revalidateJWT);


module.exports = router;