const { response } = require('express')     //to access to suggestions while code
const { validationResult } = require('express-validator');

const signUp = (req, res = response) => {

    const { name, email, password } = req.body

    // TODO express-validator
    // name.length < 2 && res.status(400).json({
    //     ok: false,
    //     msg: "Name should be 2 or more letters"
    // })

    const errors = validationResult( req );
    // console.log( errors );

    !errors.isEmpty() && res.status(400).json({
        ok: false,
        errors: errors.mapped()
    })

    res.json({
        ok: true,
        msg: 'register',
        // user: req.body,
        name,
        email,
        password
    })
}

const signIn = (req, res = response ) => {
    res.json({
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