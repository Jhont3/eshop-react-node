// Rutes users ---- host + /api/auth 
const express = require('express');
const { getUsers, getUserById, updateUser, deleteUser } = require('../controllers/user');
const { validateJWT } = require('../middlewares/validateJWT');

const router = express.Router();

router.use( validateJWT )

router.get('/', getUsers);
router.get('/:id', getUserById);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;