// Rutes users ---- host + /api/auth 

const { Router } = require('express');
const router = Router();

const { signUp, signIn, revalidateJWT } = require('../controllers/auth')


router.post('/register', signUp);

router.post('/', signIn);

router.post('/renew', revalidateJWT);


module.exports = router;