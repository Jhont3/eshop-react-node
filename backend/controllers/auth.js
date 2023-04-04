const { response } = require('express')     //to access to suggestions while code


const signUp = (req, res = response) => {

    const { name, email, password } = req.body

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