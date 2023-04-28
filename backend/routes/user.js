// Rutes users ---- host + /api/users 
const express = require('express');
const { check } = require('express-validator');

const { getUsers, getUserById, updateUser, deleteUser } = require('../controllers/user');
const { validateFields } = require('../middlewares/validateFields')
const { validateJWT } = require('../middlewares/validateJWT');

const router = express.Router();

router.use( validateJWT )

router.get('/', getUsers);
router.get('/:id', getUserById);
router.delete('/:id', deleteUser);

router.put('/:id', 
    [
        check('name', 'Name is required' ).not().isEmpty(),
        check('email', 'Email is required' ).isEmail(),
        check('password', 'Password must be 8 or more characters' ).isLength({ min:8 }),
        validateFields
    ], 
    updateUser
);

module.exports = router;
