const { response } = require('express')     //to access to suggestions while code
const { validationResult } = require('express-validator');

const signUp = (req, res = response) => {

    const { name, email, password } = req.body

    const errors = validationResult( req );
    !errors.isEmpty() && res.status(400).json({
        ok: false,
        errors: errors.mapped()
    })

    res.status(201).json({
        ok: true,
        msg: 'register',
        name,
        email,
        password
    })
}

const signIn = (req, res = response ) => {

    const { email, password } = req.body

    const errors = validationResult( req );
    !errors.isEmpty() && res.status(400).json({
        ok: false,
        errors: errors.mapped()
    })

    res.json({
        email,
        password,
        ok: true,
        msg: 'login'
    })
}

const revalidateJWT = (req, res = response ) => {
    res.json({
        ok: true,
        msg: 'validate JWT'
    })
}


module.exports = {
    signUp,
    signIn,
    revalidateJWT
};