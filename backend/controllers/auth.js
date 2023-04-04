const { response } = require('express')     //to access to suggestions while code

const signUp = (req, res = response) => {
    res.json({
        ok:true,
        msg:'register'
    })
}

const signIn = (req, res = response) => {
    res.json({
        ok:true,
        msg:'login'
    })
}

const revalidateJWT = (req, res = response) => {
    res.json({
        ok:true,
        msg:'validate JWT'
    })
}


module.exports = {
    signUp,
    signIn,
    revalidateJWT
};