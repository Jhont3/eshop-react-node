const { response } = require('express')     //to access to suggestions while code
const bcrypt = require('bcryptjs');
const User = require('../models/User')

const signUp = async (req, res = response) => {

    const { name, email, password } = req.body

    try {
        let user = await User.findOne({ email });
        console.log(user);

        if ( user ) {
            return res.status(400).json({
                ok: false,
                msg: 'The user already exists'
            })
        }

        user = new User( req.body ); 

        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync( password, salt )

        await user.save()
    
        res.status(201).json({
            ok: true,
            uid: user.id,
            name: user.name
        })
        
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: 'Something went wrong, please contact the admin'
        })
    }

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