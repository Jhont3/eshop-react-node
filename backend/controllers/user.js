const User = require('../models/User')
const bcrypt = require('bcryptjs');

const getUsers = async (req, res) => {
  try {

    const users = await User.find();
    res.status(200).json(users);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong, wait a moment and try again please' });
  }
};

const getUserById = async (req, res) => {
  try {

    const { id } = req.params;
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    res.status(200).json(user);
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong, wait a moment and try again please' });
  }
};

const updateUser = async (req, res) => {

  const { id } = req.params;
  const uid = req.uid;

  try {

    const userID = await User.findById( id )

    if ( !userID ) {
      return res.status(404).json({ 
        ok: false,
        message: 'User not found.' 
      });
    }

    if ( userID._id.toString() !== uid ) {
      return res.status(401).json({
          ok: false,
          msg: 'You are not authorized to do this.'
      });
    }
    
    const user = new User( req.body ); 
    const password = req.body.password

    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync( password, salt )

    const newUser = {
      user
    }

    const userUpdated = await User.findByIdAndUpdate ( userID, newUser, { new: true } );

    res.json({
        ok: true,
        user: userUpdated
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong, wait a moment and try again please' });
  }
};

const deleteUser = async (req, res) => {
  
  const { id } = req.params;
  const uid = req.uid;

  try {

    const userID = await User.findById( id )

    if ( !userID ) {
      return res.status(404).json({ 
        ok: false,
        message: 'User not found.' 
      });
    }

    if ( userID._id.toString() !== uid ) {
      return res.status(401).json({
          ok: false,
          msg: 'You are not authorized to do this.'
      });
  }

    await User.findByIdAndDelete ( userID );

    res.json({ ok: true });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong, wait a moment and try again please' });
  }

};

module.exports = {
    getUsers,
    getUserById,
    updateUser,
    deleteUser
};