const { response } = require('express')     //to access to suggestions while code
const bcrypt = require('bcryptjs');
const User = require('../models/User')
const { generateJWT } = require('../helpers/jwt')

const signUp = async (req, res = response) => {

    const { email, password } = req.body

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

        const token = await generateJWT( user.id, user.name );
    
        res.status(201).json({
            ok: true,
            uid: user.id,
            name: user.name,
            token
        })
        
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: 'Something went wrong, please contact the admin'
        })
    }

}

const signIn = async (req, res = response ) => {

    const { email, password } = req.body

    try {

        const user = await User.findOne({ email });
        if ( !user ) {
            return res.status(400).json({
                ok: false,
                msg: 'wrong information provided'
            })
        }

        const validPass = bcrypt.compareSync( password, user.password );
        if ( !validPass ) {
            return res.status(400).json({
                ok: false,
                msg: 'wrong information provided'
            })
        }

        const token = await generateJWT( user.id, user.name );

        res.json ({
            ok: true,
            uid: user.id,
            name: user.name,
            token
        })

        
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: 'Something went wrong, please contact the admin'
        })
    }


}

const revalidateJWT = async (req, res = response ) => {

    const { uid, name } = req

    const token = await generateJWT( uid, name );  

    res.json({
        ok: true,
        token
    })
}


module.exports = {
    signUp,
    signIn,
    revalidateJWT
};